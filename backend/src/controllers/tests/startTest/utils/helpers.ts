import moment from 'moment';

const generateStartAndFinishTestDates = (testTimeSeconds: number): [Date, Date] => {
  const startTestDate = new Date();
  const finishTestDate = moment(startTestDate).add(testTimeSeconds, 's').toDate();

  return [startTestDate, finishTestDate];
};

export { generateStartAndFinishTestDates };
