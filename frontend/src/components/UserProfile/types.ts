import { BaseSyntheticEvent } from 'react';

export interface IAvatarWrapperProps {
  visible?: boolean;
}
export interface IUserAvatarProps {
  avatar?: string;
  isFromAccordion?: boolean;
}

export interface IUserStackInfo {
  member: { name: string };
}

export interface IUserInfoProps {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  position?: string;
  group?: string;
  phone?: string;
  skype?: string;
  stack?: IUserStackInfo[];
}

export interface IUserInfoItemProps {
  infoLabel: string;
  infoText: string | IUserStackInfo[];
}

export interface ICopyNameContainerProps {
  userName: string;
}

export interface ICopyNameProps extends ICopyNameContainerProps {
  handleCopyClick: (event: BaseSyntheticEvent) => void;
}
