const isTestAvailableByDate = (estimatedFinishDate?: Date): boolean => {
  if (!estimatedFinishDate) {
    return true;
  }

  const currentDate = new Date();

  const isAvailable = currentDate < estimatedFinishDate;

  return isAvailable;
};

export { isTestAvailableByDate };
