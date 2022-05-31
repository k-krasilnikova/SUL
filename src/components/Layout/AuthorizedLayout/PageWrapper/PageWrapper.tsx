import { forwardRef, ForwardedRef } from 'react';

import { IPageWrapperProps } from 'components/Layout/types';
import { PageWrapper as StyledPageWrapper } from 'components/Layout/styled';

const PageWrapper = (
  { children, isSqueeze }: IPageWrapperProps,
  ref: ForwardedRef<HTMLDivElement>,
) => (
  <StyledPageWrapper ref={ref} isSqueeze={isSqueeze}>
    {children}
  </StyledPageWrapper>
);

export default forwardRef(PageWrapper);
