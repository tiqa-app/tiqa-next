const ChevronUpIcon = ({ color = "currentColor", size = 24, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
};

ChevronUpIcon.displayName = "ChevronUpIcon";

export default ChevronUpIcon;
