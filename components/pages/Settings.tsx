"use client";

import { useTheme } from "next-themes";
import LightIcon from "../icons/LightIcon";
import DarkIcon from "../icons/DarkIcon";

const Settings = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <h2 className="dark:text-gray-200 text-2xl font-sour-gummy mb-8 tracking-wide">
        Settings
      </h2>

      <div className="h-full">
        <h3 className="text-gray-500 text-xl font-sour-gummy mb-2 font-light">UI Settings</h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mb-12 gap-4">
          <div>
            <div>
              <h3 className="text-[#6439FF] text-lg font-sour-gummy mb-1 tracking-wide">
                Theme
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-sour-gummy">
                Choose between light and dark mode
              </p>
            </div>
            <div className="flex items-baseline">
              <button onClick={() => setTheme("light")} className="p-2">
                <LightIcon
                  primary={theme == "dark" ? "#E6EEFF" : "#292929"}
                  secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"}
                />
              </button>
              <button onClick={() => setTheme("dark")} className="p-2">
                <DarkIcon
                  primary={theme == "dark" ? "#E6EEFF" : "#292929"}
                  secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
