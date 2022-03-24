const checkTestDate = (date: string | undefined) => {
  if (!date) {
    return true;
  }
  return new Date(date).getTime() < Date.now();
};

export default checkTestDate;
