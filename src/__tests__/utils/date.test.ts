import { generateStartAndFinishTestDates } from 'controllers/tests/startTest/utils/helpers';

jest.useFakeTimers().setSystemTime(new Date(2022, 0, 1));

describe('Test date', () => {
  it('Generate start and finish date for test', () => {
    const testTimeInSeconds = 300;
    const startTestDate = new Date();
    const finishTestDate = new Date(
      startTestDate.setSeconds(startTestDate.getSeconds() + testTimeInSeconds),
    );

    const startAndFinishDate = generateStartAndFinishTestDates(testTimeInSeconds);

    expect(startAndFinishDate).toHaveLength(2);
    expect(startAndFinishDate).toContainEqual(startTestDate);
    expect(startAndFinishDate).toContainEqual(finishTestDate);
  });
});
