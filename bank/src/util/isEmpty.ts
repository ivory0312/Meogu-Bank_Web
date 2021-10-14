const isEmpty = (value: any) => {
  if (
    value === null ||
    value === undefined ||
    value.length <= 0 ||
    String(value).trim().length <= 0
  ) {
    return true;
  }

  return false;
};

export default isEmpty;
