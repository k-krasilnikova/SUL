const groupByProperty = <T>(array: T[], propertyKey: keyof T): Map<T[keyof T], T[]> => {
  return array.reduce((group: Map<T[keyof T], T[]>, item: T) => {
    const key = item[propertyKey];
    if (!group.has(key)) {
      group.set(key, []);
    }
    group.get(key)?.push(item);
    return group;
  }, new Map());
};

export default groupByProperty;
