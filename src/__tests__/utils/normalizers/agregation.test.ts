import { aggregateNormalizer } from 'utils/normalizer/aggregate';

describe('Normalizers aggregation', () => {
  it('Should destruct aggregate object', () => {
    const testObject = { test: 'a', name: 'b' };
    const arrayOfTestObject = [testObject];
    expect(aggregateNormalizer(arrayOfTestObject)).toMatchObject(testObject);
  });
});
