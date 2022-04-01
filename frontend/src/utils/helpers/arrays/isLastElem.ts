import { Numbers } from 'constants/numbers';

const isLastElem = <T>(arr: Array<T>, currIndx: number): boolean =>
  arr.length - Numbers.one === currIndx;

export default isLastElem;
