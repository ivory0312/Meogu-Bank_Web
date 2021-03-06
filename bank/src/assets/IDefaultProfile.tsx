const defaultProfile = (props: { color: string }): JSX.Element => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill={props.color} />
      <ellipse cx="50" cy="34.5" rx="18" ry="18.5" fill="#DCDCDC" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8022 81.0438C16.8711 67.5632 32.1326 58 50.0001 58C67.8676 58 83.1292 67.5633 89.198 81.044C80.0392 92.5928 65.8848 100 50.0002 100C34.1156 100 19.961 92.5927 10.8022 81.0438Z"
        fill="#DCDCDC"
      />
    </svg>
  );
};

export default defaultProfile;
