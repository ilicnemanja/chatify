import React from "react";

const LightIcon = ({ primary, secondary }: { primary: string, secondary: string}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke={secondary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H21"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 12H4"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 20L12 21"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 3L12 4"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.6569 17.6569L18.364 18.364"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.63605 5.63605L6.34315 6.34315"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.34314 17.6569L5.63603 18.364"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18.364 5.63605L17.6568 6.34315"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LightIcon;
