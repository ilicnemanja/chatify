import React from "react";

const StatusIcon = ({ primary, secondary }: { primary: string, secondary: string}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z"
        stroke={primary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke={secondary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 2L19 2"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StatusIcon;
