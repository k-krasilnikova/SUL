import { ITechnology } from 'types/skill';

export interface ITechnologyItemProps {
  technology: ITechnology;
  isInfoShown: boolean;
  showInfo: () => void;
  hideInfo: () => void;
}

export interface ITechnologyItemContainerProps {
  technology: ITechnology;
}
