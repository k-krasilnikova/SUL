const PARAMETER_PATTERN = /:\w+/;

const transformRoute = (uri: string, value: string): string => {
  const transformedRoute = uri.replace(PARAMETER_PATTERN, value);

  return transformedRoute;
};

export default transformRoute;
