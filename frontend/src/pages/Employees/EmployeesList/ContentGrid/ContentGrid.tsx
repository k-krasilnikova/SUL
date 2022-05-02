import { forwardRef, ForwardedRef } from 'react';

import { IContentGridProps } from 'pages/Employees/types';

import { StyledGrid } from './styled';

const ContentGrid = (
  { children, ...props }: IContentGridProps,
  ref: ForwardedRef<HTMLDivElement>,
) => (
  <StyledGrid container columns={16} ref={ref} {...props}>
    {children}
  </StyledGrid>
);
export default forwardRef(ContentGrid);
