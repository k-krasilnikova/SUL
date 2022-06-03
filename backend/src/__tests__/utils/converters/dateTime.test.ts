import { ITimePeriod } from 'interfaces/common/datetime';
import {
  convertToCourseDuration,
  convertToTimePeriod,
} from 'utils/typeConversion/datetime/datetimeTypeConversions';

describe('Date&time converters tests', () => {
  it('Convert to course duration util', () => {
    const seconds = 8274;

    const expectedPeriod: ITimePeriod = {
      days: 0,
      hours: 2,
      minutes: 18,
    };

    const result = convertToCourseDuration(seconds);

    expect(result).toEqual(expectedPeriod);
  });

  it('Convert to time period util', () => {
    const milliseconds = 4717238;

    const expectedPeriod: ITimePeriod = {
      days: 0,
      hours: 1,
      minutes: 19,
    };

    const result = convertToTimePeriod(milliseconds);

    expect(result).toEqual(expectedPeriod);
  });
});
