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
  const [MS_IN_SEC, SEC_IN_HOUR, SEC_IN_MIN] = [1000, 3600, 60];
  let hours;
  let minutes;
  let seconds = Math.round(Math.abs(ms) / MS_IN_SEC);

  const prettier = (time: number, mesure: string) =>
    time < 10 ? `0${time} ${mesure}` : `${time} ${mesure}`;

  if (formatArr.includes('hh')) {
    hours = Math.floor(seconds / SEC_IN_HOUR);
    result.push(prettier(hours, 'h'));
    seconds = Math.floor(seconds % SEC_IN_HOUR);
  }
  if (formatArr.includes('mm')) {
    minutes = Math.floor(seconds / SEC_IN_MIN);
    result.push(prettier(minutes, 'min'));
    seconds = Math.floor(seconds % SEC_IN_MIN);
  }
  if (formatArr.includes('ss')) {
    result.push(prettier(seconds, 'sec'));
  }
  return result.join(' ');
};
