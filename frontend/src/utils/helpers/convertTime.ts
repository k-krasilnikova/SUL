import { NO_TIME, TO_MILLISECONDS_RATIO } from 'constants/time';
import { Numbers } from 'enums/numbers';
import { TimeProps } from 'types/time';

export const convertTestTimeout = (sec: number): string => {
  const [SEC_IN_HOUR, SEC_IN_MIN] = [3600, 60];
  let seconds = Math.round(Math.abs(sec));
  const hours = Math.floor(seconds / SEC_IN_HOUR);
  seconds = Math.floor(seconds % SEC_IN_HOUR);
  const minutes = Math.floor(seconds / SEC_IN_MIN);
  seconds = Math.floor(seconds % SEC_IN_MIN);
  const [hh, mm, ss] = [hours, minutes, seconds].map((item) =>
    item < 10 ? `0${item}` : item.toString(),
  );
  return hh !== '00' ? `${hh} h ${mm} min ${ss} sec left` : `${mm} min ${ss} sec left`;
};

export const formatTimeout = (sec: number, format: string): string => {
  const formatArr = format.split(':');
  const result = [];
  const shortTimeStringValue: { [key: string]: string } = {
    dd: 'days',
    hh: 'h',
    mm: 'min',
    ss: 'sec',
  };
  const arrOfShortFormat = Object.keys(shortTimeStringValue);
  const secondsIn: { [key: string]: number } = {
    dd: 86400,
    hh: 3600,
    mm: 60,
  };
  let seconds = Math.round(Math.abs(sec));

  const prettierTime = (time: number, measure: string) =>
    time < 10 ? `0${time} ${measure}` : `${time} ${measure}`;

  const isFormatPlaceholderNeeded = (secondsLeft: number) =>
    secondsLeft && result.length < formatArr.length;

  for (let i = 0; i <= arrOfShortFormat.length; i += 1) {
    if (formatArr.includes(arrOfShortFormat[i]) || isFormatPlaceholderNeeded(seconds)) {
      const timeFormat = arrOfShortFormat[i];
      const timeStringFormat = shortTimeStringValue[timeFormat];
      const timevalue = Math.floor(seconds / (secondsIn[timeFormat] ?? Numbers.one));
      seconds = Math.floor(seconds % secondsIn[timeFormat]);
      if (timevalue >= Numbers.one || timeStringFormat === shortTimeStringValue.ss) {
        result.push(prettierTime(timevalue, timeStringFormat));
      }
    }
  }

  return result.join(' ');
};

export const makeLeftTime = (
  date: string | undefined,
  format: string,
  timeout: number,
): string | undefined => {
  if (!date) {
    return date;
  }
  const applyDate = new Date(date);
  return formatTimeout(
    (applyDate.setDate(applyDate.getDate() + timeout) - Date.now()) / TO_MILLISECONDS_RATIO,
    format,
  );
};

export const convertRequestTime = (time?: TimeProps): string | undefined => {
  let convertedTime;
  if (time && time.days > NO_TIME) {
    convertedTime = `${time.days} d`;
  } else if (time && time.hours > NO_TIME) {
    convertedTime = `${time.hours} h`;
  } else if (time && time.minutes > NO_TIME && time.hours === NO_TIME) {
    convertedTime = `${time.minutes} m`;
  }
  return convertedTime;
};
