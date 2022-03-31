import React from 'react';

import Loader from 'components/Loader';
import { NoContent } from 'components/NoContent';
import { AuthorizedLayout } from 'components/Layout';
import { LOADER } from 'constants/loaderTypes';
import { NO_REQUESTS } from 'constants/messages';
import { IRequestsProps } from 'types/request';

import RequestItem from './RequestItem';
import { RequestsWrapper } from './styled';

const Requests: React.FC<IRequestsProps> = ({
  requests,
  isLoading,
  targetId,
  approveRequest,
  approveLoading,
  declineRequest,
  declineLoading,
}) => (
  <AuthorizedLayout pageName="Requests">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : requests?.length ? (
      <RequestsWrapper container>
        {requests.map((request) => {
          const isTargetRequest = targetId === request._id;
          return (
            <RequestItem
              key={request._id}
              request={request}
              approveRequest={approveRequest}
              approveLoading={approveLoading}
              declineRequest={declineRequest}
              declineLoading={declineLoading}
              isTargetRequest={isTargetRequest}
              status={request.status}
            />
          );
        })}
      </RequestsWrapper>
    ) : (
      <NoContent message={NO_REQUESTS} />
    )}
  </AuthorizedLayout>
);

export default Requests;
