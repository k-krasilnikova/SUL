import { FC, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TPageWrapperContainerProps } from 'components/Layout/types';

import PageWrapper from './PageWrapper';

const PageWrapperContainer: FC<TPageWrapperContainerProps> = ({ children, isSqueeze }) => {
  const { pathname } = useLocation();

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <PageWrapper ref={ref} isSqueeze={isSqueeze}>
      {children}
    </PageWrapper>
  );
};

export default PageWrapperContainer;
