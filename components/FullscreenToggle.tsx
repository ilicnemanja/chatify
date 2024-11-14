"use client"
import { useState } from 'react';
import {
    Maximize,
    Minimize2 as Minimize,
} from "lucide-react"

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <button onClick={toggleFullscreen}>
      {isFullscreen ? <Minimize className='dark:text-[#E6EEFF] text-gray-500' /> : <Maximize className='dark:text-[#E6EEFF] text-gray-500' />}
    </button>
  );
}
