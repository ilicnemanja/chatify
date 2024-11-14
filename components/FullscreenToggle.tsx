import { useState } from 'react';
import {
    Maximize,
    Minimize2 as Minimize,
} from "lucide-react"

export default function FullscreenToggle({ onFullScreenChange }: { onFullScreenChange: (state: boolean) => void }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fullscreenCallback = (state: boolean) => {
    setIsFullscreen(state);
    onFullScreenChange(state);
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      // callback
      fullscreenCallback(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      // callback
      fullscreenCallback(false);
    }
  };

  return (
    <button onClick={toggleFullscreen}>
      {isFullscreen ? <Minimize className='dark:text-[#E6EEFF] text-gray-500' /> : <Maximize className='dark:text-[#E6EEFF] text-gray-500' />}
    </button>
  );
}