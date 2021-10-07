const Money = (props: { props: string }): JSX.Element => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill={props.props} />
      <path
        d="M6.94737 9L9.78947 21L14.5263 9L18.3158 21L22.5789 9M24 15H6"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Money;
