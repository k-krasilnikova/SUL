import { FC } from 'react';

import PageTitle from 'components/PageTitle';

import NotFound from './NotFound';

const NotFoundContainer: FC = () => (
  <PageTitle title="Not found">
    <NotFound />
  </PageTitle>
);

export default NotFoundContainer;
