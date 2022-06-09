const getFilterSelectsConfig = (withStatusSelect?: boolean): string[] => {
  const defaultSelectsFilters = ['technologies', 'complexity'];

  if (withStatusSelect) {
    defaultSelectsFilters.push('status');
  }

  return defaultSelectsFilters;
};

export default getFilterSelectsConfig;
