import moment from 'moment';

/**
 * Returns an array that contains start test date and estimated finishTestDate
 * @param {number} testTimeSeconds
 * @returns {[Date, Date]} An array of 2 elements: startTestDate and finishTestDate
 */
const generateStartAndFinishTestDates = (testTimeSeconds: number): [Date, Date] => {
  const startTestDate = new Date();
  const finishTestDate = moment(startTestDate).add(testTimeSeconds, 's').toDate();

  return [startTestDate, finishTestDate];
};

export { generateStartAndFinishTestDates };
