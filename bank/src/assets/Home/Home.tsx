const Home = (props: { props: string }): JSX.Element => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 12.0652L15 0L0 12.0652V30H11.739V21.1739H18.2608V30H30V12.0652Z"
        fill={props.props}
      />
    </svg>
  );
};

export default Home;
