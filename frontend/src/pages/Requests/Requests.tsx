import { FC } from 'react';

import { NO_REQUESTS } from 'constants/messages';
import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import NoContent from 'components/NoContent';
import { Loaders } from 'enums/loader';

import RequestItem from './RequestItem';
import { IRequestsProps } from './types';
import { RequestsWrapper } from './styled';

const Requests: FC<IRequestsProps> = ({ requests, isRequestsLoading, ...props }) => (
  <PageTitle title="Requests">
    {isRequestsLoading ? (
      <Loader type={Loaders.content} />
    ) : requests?.length ? (
      <RequestsWrapper container>
        {requests.map((request) => (
          <RequestItem key={request._id} request={request} {...props} />
        ))}
      </RequestsWrapper>
    ) : (
      <NoContent message={NO_REQUESTS} />
    )}
  </PageTitle>
);

export default Requests;
