import { DISABLE_TIMEOUT_DAYS, NO_TIME } from 'constants/time';

interface ITime {
  days: number;
  hours: number;
  minutes: number;
}

export const convertTestTimeout = (ms: number): string => {
  const [MS_IN_SEC, SEC_IN_HOUR, SEC_IN_MIN] = [1000, 3600, 60];
  let seconds = Math.round(Math.abs(ms) / MS_IN_SEC);
  const hours = Math.floor(seconds / SEC_IN_HOUR);
  seconds = Math.floor(seconds % SEC_IN_HOUR);
  const minutes = Math.floor(seconds / SEC_IN_MIN);
  seconds = Math.floor(seconds % SEC_IN_MIN);
  const [hh, mm, ss] = [hours, minutes, seconds].map((item) =>
    item < 10 ? `0${item}` : item.toString(),
  );
  return hh !== '00' ? `${hh} h ${mm} min ${ss} sec left` : `${mm} min ${ss} sec left`;
};

export const formatTimeout = (ms: number, format: string): string => {
  const formatArr = format.split(':');
  const result = [];
  const [MS_IN_SEC, SEC_IN_HOUR, SEC_IN_MIN, SEC_IN_DAY] = [1000, 3600, 60, 86400];
  let days;
  let hours;
  let minutes;
  let seconds = Math.round(Math.abs(ms) / MS_IN_SEC);

  const prettierTime = (time: number, measure: string) =>
    time < 10 ? `0${time} ${measure}` : `${time} ${measure}`;

  if (formatArr.includes('dd')) {
    days = Math.floor(seconds / SEC_IN_DAY);
    result.push(prettierTime(days, 'days'));
    seconds = Math.floor(seconds % SEC_IN_DAY);
  }
  if (formatArr.includes('hh')) {
    hours = Math.floor(seconds / SEC_IN_HOUR);
    result.push(prettierTime(hours, 'h'));
    seconds = Math.floor(seconds % SEC_IN_HOUR);
  }
  if (formatArr.includes('mm')) {
    minutes = Math.floor(seconds / SEC_IN_MIN);
    result.push(prettierTime(minutes, 'min'));
    seconds = Math.floor(seconds % SEC_IN_MIN);
  }
  if (formatArr.includes('ss')) {
    result.push(prettierTime(seconds, 'sec'));
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
  return formatTimeout(applyDate.setDate(applyDate.getDate() + timeout) - Date.now(), format);
};

export const convertRequestTime = (time?: ITime): string | undefined => {
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
