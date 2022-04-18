import React from 'react';

import Loader from 'components/Loader';
import NoContent from 'components/NoContent';
import { AuthorizedLayout } from 'components/Layout';
import { IRequest } from 'types/request';
import { NO_REQUESTS } from 'constants/messages';
import { ELoader } from 'enums/loader';

import RequestItem from './RequestItem';
import { RequestsWrapper } from './styled';

interface IRequestsProps {
  approveRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineRequest: (requestId: string) => void;
  declineLoading: boolean;
  requests?: IRequest[];
  isLoading?: boolean;
  targetId?: string;
}

const Requests: React.FC<IRequestsProps> = ({ requests, isLoading, targetId, ...props }) => (
  <AuthorizedLayout pageName="Requests">
    {isLoading ? (
      <Loader color="primary" type={ELoader.content} />
    ) : requests?.length ? (
      <RequestsWrapper container>
        {requests.map((request) => {
          const isTargetRequest = targetId === request._id;
          return (
            <RequestItem
              key={request._id}
              request={request}
              isTargetRequest={isTargetRequest}
              {...props}
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
