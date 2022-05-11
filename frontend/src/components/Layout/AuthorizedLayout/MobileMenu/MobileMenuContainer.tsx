import { FC, BaseSyntheticEvent } from 'react';

import { WINDOW_SIZE } from 'constants/windowWidth';
import { useGetWindowSizeLabel } from 'hooks';
import { TMenuMobileContainerProps } from 'components/Layout/types';

import MobileMenu from './MobileMenu';

const MobileMenuContainer: FC<TMenuMobileContainerProps> = (props) => {
  const windowSize = useGetWindowSizeLabel();

  const isMobileWindowSize = [WINDOW_SIZE.sm.name, WINDOW_SIZE.xs.name].includes(windowSize);

  const handleSpaceHolderClick = (event: BaseSyntheticEvent) => {
    event.stopPropagation();
  };

  return (
    <MobileMenu
      isMobileWindowSize={isMobileWindowSize}
      handleSpaceHolderClick={handleSpaceHolderClick}
      {...props}
    />
  );
};

export default MobileMenuContainer;
