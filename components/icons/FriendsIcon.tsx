import React from "react";

const FriendsIcon = ({ primary, secondary }: { primary: string, secondary: string}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.99988 18C3.99988 15.7908 5.79074 14 7.99988 14H15.9999C18.209 14 19.9999 15.7908 19.9999 18V18C19.9999 19.1045 19.1044 20 17.9999 20H5.99988C4.89531 20 3.99988 19.1045 3.99988 18V18Z"
        stroke={primary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="11.9999"
        cy="6.99997"
        r="3"
        stroke={secondary}
        strokeWidth="2"
      />
    </svg>
  );
};

export default FriendsIcon;
