import { FC, useRef } from 'react';

import { IContentGridContainerProps } from 'pages/Employees/types';

import ContentGrid from './ContentGrid';

export const ContentGridContainer: FC<IContentGridContainerProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ContentGrid ref={ref} contentHeight={ref?.current?.scrollHeight} {...props}>
      {children}
    </ContentGrid>
  );
};

export default ContentGridContainer;
