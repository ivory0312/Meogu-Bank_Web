const isNumber = (value: string) => {
  const isNumber: boolean = /[^0-9]/g.test(value);
  const valueData: string = value.replace(/[^0-9]/g, "");

  return { isNumber, valueData };
};

export default isNumber;
