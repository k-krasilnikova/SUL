import { FC, BaseSyntheticEvent } from 'react';
import { LinkProps as ILinkProps } from 'react-router-dom';

import { WINDOW_SIZE } from 'constants/windowWidth';

import MobileLink from './MobileLink';

const MobileLinkContainer: FC<ILinkProps> = ({ children, ...props }) => {
  const handleLinkClick = (event: BaseSyntheticEvent) =>
    window.innerWidth > WINDOW_SIZE.sm.width && event.preventDefault();

  return (
    <MobileLink handleLinkClick={handleLinkClick} {...props}>
      {children}
    </MobileLink>
  );
};

export default MobileLinkContainer;
