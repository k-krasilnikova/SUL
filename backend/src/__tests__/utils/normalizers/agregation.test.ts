import { aggregateNormolizer } from 'utils/normaliser/aggregateNormalizer';

describe('Normalizers aggregation', () => {
  it('Should destruct aggregate object', () => {
    const testObject = { test: 'a', name: 'b' };
    const arrayOfTestObject = [testObject];
    expect(aggregateNormolizer(arrayOfTestObject)).toMatchObject(testObject);
  });
});
