const ProfileAvatar = () => {
    return (
      <svg
        className="!w-full !h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60" // Reduced viewBox for zoom-in effect
      >
        <g transform="scale(1.5) translate(-10, -10)"> {/* Scale and position the content */}
          <path
            d="M48 30c0 9.941-8.059 18-18 18s-18-8.059-18-18 8.059-18 18-18 18 8.059 18 18z"
            fill="#57D3D2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 30c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM30 48c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18z"
            fill="#1A1C20"
          />
          <path
            d="M18.49 43.84A13.616 13.616 0 0130 37.502a13.62 13.62 0 0111.51 6.338A17.927 17.927 0 0130 48c-4.377 0-8.39-1.562-11.51-4.16z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 38.502a12.62 12.62 0 00-10.665 5.873 1 1 0 11-1.69-1.07 14.618 14.618 0 0124.71 0 1 1 0 01-1.69 1.07A12.616 12.616 0 0030 38.502z"
            fill="#1A1C20"
          />
          <path d="M30 33a6 6 0 100-12 6 6 0 000 12z" fill="#fff" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 22a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0z"
            fill="#1A1C20"
          />
        </g>
      </svg>
    );
  };
  
  export default ProfileAvatar;
  