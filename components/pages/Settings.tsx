"use client";

import { useTheme } from "next-themes";
import LightIcon from "../icons/LightIcon";
import DarkIcon from "../icons/DarkIcon";

const Settings = () => {
  const { setTheme, theme } = useTheme();

  return (
    // This is actually code for the Settings page
    // <div className="md:h-4/5">
    //   <h2 className="dark:text-gray-200 text-2xl font-sour-gummy mb-8 tracking-wide">
    //     Settings
    //   </h2>

    //   <div className="overflow-y-auto h-full">
    //     <h3 className="text-gray-500 text-xl font-sour-gummy mb-2 font-light">UI Settings</h3>
    //     <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mb-12 gap-4">
    //       <div>
    //         <div>
    //           <h3 className="text-[#6439FF] text-lg font-sour-gummy mb-1 tracking-wide">
    //             Theme
    //           </h3>
    //           <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-sour-gummy">
    //             Choose between light and dark mode
    //           </p>
    //         </div>
    //         <div className="flex items-baseline">
    //           <button onClick={() => setTheme("light")} className="p-2">
    //             <LightIcon
    //               primary={theme == "dark" ? "#E6EEFF" : "#292929"}
    //               secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"}
    //             />
    //           </button>
    //           <button onClick={() => setTheme("dark")} className="p-2">
    //             <DarkIcon
    //               primary={theme == "dark" ? "#E6EEFF" : "#292929"}
    //               secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"}
    //             />
    //           </button>
    //         </div>
    //       </div>

    //       <div>
    //         <div>
    //           <h3 className="text-[#6439FF] text-lg font-sour-gummy mb-1 tracking-wide">
    //             Font Size
    //           </h3>
    //           <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-sour-gummy">
    //             Change the font size of the website
    //           </p>
    //         </div>
    //         <div className="flex items-baseline gap-1">
    //           <button className="text-2xl font-sour-gummy dark:text-[#E6EEFF]">
    //             A
    //           </button>
    //           <button className="px-2 text-xl font-sour-gummy dark:text-[#E6EEFF]">
    //             A
    //           </button>
    //           <button className="text-base font-sour-gummy dark:text-[#E6EEFF]">
    //             A
    //           </button>
    //         </div>
    //       </div>

    //       <div>
    //         <div>
    //           <h3 className="text-[#6439FF] text-lg font-sour-gummy mb-1 tracking-wide">
    //             Font Family
    //           </h3>
    //           <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 font-sour-gummy">
    //             Change the font family of the website
    //           </p>
    //         </div>
    //         <div className="flex items-baseline gap-1">
    //           <button className="font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Default
    //           </button>
    //           <button className="px-2 font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Arial
    //           </button>
    //           <button className="px-2 font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Roboto
    //           </button>
    //           <button className="font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Courier
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <h3 className="text-gray-500 text-xl font-sour-gummy mb-2 font-light">Privacy Settings</h3>
    //     <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-4 mb-12 md:mb-0">
    //       <div>
    //         <div>
    //           <h3 className="text-[#6439FF] text-lg font-sour-gummy mb-1 tracking-wide">
    //             Who can see your profile?
    //           </h3>
    //           <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-sour-gummy">
    //             Choose who can see your profile
    //           </p>
    //         </div>
    //         <div className="flex items-baseline gap-1">
    //           <button className="font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Everyone
    //           </button>
    //           <button className="px-2 font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Your Friends
    //           </button>
    //         </div>
    //       </div>

    //       <div>
    //         <div>
    //           <h3 className="text-[#6439FF] text-lg font-sour-gummy mb-1 tracking-wide">
    //             Who can see your status?
    //           </h3>
    //           <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-sour-gummy">
    //             Choose who can see your status
    //           </p>
    //         </div>
    //         <div className="flex items-baseline gap-1">
    //           <button className="font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             All Friends
    //           </button>
    //           <button className="px-2 font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Close Friends
    //           </button>
    //         </div>
    //       </div>

    //       <div>
    //         <div>
    //           <h3 className="text-[#6439FF] text-lg font-sour-gummy mb-1 tracking-wide">
    //             Who can see you online?
    //           </h3>
    //           <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-sour-gummy">
    //             Choose who can see you online
    //           </p>
    //         </div>
    //         <div className="flex items-baseline gap-1">
    //           <button className="font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             All Friends
    //           </button>
    //           <button className="px-2 font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             Close Friends
    //           </button>
    //           <button className="font-sour-gummy dark:text-[#E6EEFF] hover:underline hover:underline-offset-2">
    //             No One
    //           </button>
    //         </div>
    //       </div>
     
    //     </div>
    //   </div>
    // </div>

    // This is temporary code for the Settings page
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
