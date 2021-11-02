import { useEffect, useState } from "react";
import isEmpty from "util/isEmpty";

import "./PasswordInput.scss";

const PasswordInput = () => {
  const [inputs, setInputs] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const [type, setType] = useState({
    1: "text",
    2: "text",
    3: "text",
    4: "text",
  });

  const passwordData: any[] = [];

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { id } = e.target;

    if (isEmpty(value)) {
      document.getElementById(String(parseInt(id) - 1))?.focus();
      if (parseInt(id) > 1) {
        setType({
          ...type,
          [String(parseInt(id) - 1)]: "text",
        });
      }
    } else {
      document.getElementById(String(parseInt(id) + 1))?.focus();
      if (parseInt(id) > 1) {
        setType({
          ...type,
          [String(parseInt(id) - 1)]: "password",
        });
      }
    }
    const onlyNumber = value.replace(/[^0-9]/g, "");

    setInputs({
      ...inputs,
      [id]: onlyNumber,
    });
  };
  return (
    <div className="passwordInput">
      <input
        id="1"
        type={type[1]}
        value={inputs[1]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
      <input
        id="2"
        type={type[2]}
        value={inputs[2]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
      <input
        id="3"
        type={type[3]}
        value={inputs[3]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
      <input
        id="4"
        type={type[4]}
        value={inputs[4]}
        maxLength={1}
        onChange={handleInput}
        autoComplete="off"
      />
    </div>
  );
};

export default PasswordInput;
