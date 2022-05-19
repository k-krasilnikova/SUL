import { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { IPageTitleProps } from './types';

const PageTitle: FC<IPageTitleProps> = ({ title, children }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </HelmetProvider>
);

export default PageTitle;
