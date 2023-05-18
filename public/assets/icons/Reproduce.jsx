const Reproduce = ({ size = "large", ...props }) => {
  if (size === "large") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        {...props}
      >
        <circle
          cx={24}
          cy={24}
          r={23.5}
          fill="#242424"
          fillOpacity={0.5}
          stroke="#fff"
        />
        <path
          stroke="#fff"
          d="M31.978 24.324 19.2 15.6v16.8l12.778-8.076Z"
          clipRule="evenodd"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
      >
        <circle
          cx={12}
          cy={12}
          r={11.5}
          fill="#242424"
          fillOpacity={0.5}
          stroke="#fff"
        />
        <path
          stroke="#fff"
          d="M15.989 12.162 9.599 7.8v8.4l6.39-4.038Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
};
export default Reproduce;
