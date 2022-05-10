import { aggregateNormolizer } from 'utils/normaliser/aggregateNormalizer';

describe('normalizers', () => {
  it('should destruct aggregate object', () => {
    const testObject = { test: 'a', name: 'b' };
    const arrayofTestObject = [testObject];
    expect(aggregateNormolizer(arrayofTestObject)).toEqual(testObject);
  });
});
