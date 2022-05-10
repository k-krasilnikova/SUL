import { BaseSyntheticEvent } from 'react';
import { LinkProps as ILinkProps } from 'react-router-dom';

export interface IMobileLinkProps extends ILinkProps {
  handleLinkClick: (event: BaseSyntheticEvent) => void;
}
