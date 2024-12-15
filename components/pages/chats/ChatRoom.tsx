/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface ChatRoomProps {
  user: { id: string; firstName: string; lastName: string; imageUrl: string, username: string };
  friend: { id: string; firstName: string; lastName: string; imageUrl: string, username: string };
}

const ChatRoom = ({ user, friend }: ChatRoomProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ senderId: string; message: string }[]>([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketConnection = io(`${process.env.NEXT_PUBLIC_API_WS_URL}/chats`, {
      query: { userId: user.id },
    });

    setSocket(socketConnection);

    socketConnection.on('privateMessage', (data: { senderId: string; message: string }) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socketConnection.disconnect();
    };
  }, [user.id]);

  const sendMessage = () => {
    if (socket && message) {
      socket.emit('privateMessage', {
        senderId: user.id,
        receiverId: friend.id,
        message,
      });
      setMessages((prevMessages) => [...prevMessages, { senderId: user.id, message }]);
      setMessage('');
    }
  };

  return (
    <div>
      <h1 className='mb-5 font-sour-gummy text-2xl'>Chat with {friend.firstName} {friend.lastName}</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className='flex flex-row items-center gap-2 mb-2'>
            <div>
            {msg.senderId === user.id ? (
                <Image className='rounded-full max-w-8 max-h-8' src={user.imageUrl} alt='Profile Picture' width={30} height={30} />
                ) : (
                <Image className='rounded-full max-w-8 max-h-8' src={friend.imageUrl} alt='Profile Picture' width={30} height={30} />
            )}
            </div>
            <strong className='capitalize'>{msg.senderId === user.id ? 'You' : friend.username}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <div className='absolute bottom-10 left-10'>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className='border-2 border-gray-200 rounded-md p-2 mr-4 font-sour-gummy'
        />
        <button onClick={sendMessage} className='font-sour-gummy'>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
