import React from "react";

const CommunityIcon = ({ primary, secondary }: { primary: string, secondary: string}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L15 6L12 9L9 6L12 3Z"
        stroke={secondary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 15L15 18L12 21L9 18L12 15Z"
        stroke={primary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 9L21 12L18 15L15 12L18 9Z"
        stroke={primary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 9L9 12L6 15L3 12L6 9Z"
        stroke={primary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommunityIcon;
