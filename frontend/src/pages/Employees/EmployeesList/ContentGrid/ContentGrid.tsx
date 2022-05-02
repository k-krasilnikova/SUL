import { FC, forwardRef } from 'react';

import { IContentGridProps } from 'pages/Employees/types';

import { StyledGrid } from './styled';

const ContentGrid: FC<IContentGridProps> = forwardRef<HTMLDivElement, IContentGridProps>(
  ({ children, ...props }, ref) => (
    <StyledGrid container columns={16} ref={ref} {...props}>
      {children}
    </StyledGrid>
  ),
);

export default ContentGrid;
