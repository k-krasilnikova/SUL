import { Numbers } from 'constants/numbers';

const isLastElem = <T>(arr: Array<T>, currentIndex: number): boolean =>
  arr.length - Numbers.one === currentIndex;

export default isLastElem;
