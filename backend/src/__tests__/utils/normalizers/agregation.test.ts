import { aggregateNormolizer } from 'utils/normaliser/aggregateNormalizer';

describe('normalizers aggregation', () => {
  it('should destruct aggregate object', () => {
    const testObject = { test: 'a', name: 'b' };
    const arrayOfTestObject = [testObject];
    expect(aggregateNormolizer(arrayOfTestObject)).toMatchObject(testObject);
  });
});
