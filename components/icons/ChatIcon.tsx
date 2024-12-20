import React from "react";

const ChatIcon = ({ primary, secondary }: { primary: string, secondary: string}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16.1271C3.36093 14.8909 3 13.4876 3 11.9999C3 7.02938 7.02944 2.99994 12 2.99994C16.9706 2.99994 21 7.02938 21 11.9999C21 16.9705 16.9706 20.9999 12 20.9999C10.5124 20.9999 9.10904 20.639 7.8728 19.9999"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16.1271L3 20.9999L7.8728 19.9999"
        stroke={secondary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatIcon;
