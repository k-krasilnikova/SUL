export const aggregateNormolizer = <T extends object>(data: Array<T>) => {
  const innerObject = data.reduce((aggr, next) => Object.assign(next, aggr));
  return innerObject;
};
