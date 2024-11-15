import React from "react";

const DarkIcon = ({ primary, secondary }: { primary: string, secondary: string}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6251 3.10437C6.30715 3.76627 3 7.49693 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.9156 20.9988 11.8316 20.9965 11.7477"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6251 3.10437C10.2236 3.98683 10 4.96731 10 6.00002C10 9.86601 13.134 13 17 13C18.4857 13 19.8634 12.5371 20.9965 11.7477"
        stroke={secondary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DarkIcon;
