export const aggregateNormalizer = <T extends object>(data: Array<T>): T => {
  const innerObject = data.reduce((aggr, next) => Object.assign(next, aggr));
  return innerObject;
};
