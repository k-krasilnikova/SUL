import { FC } from 'react';

import Loader from 'components/Loader';
import NoContent from 'components/NoContent';
import { AuthorizedLayout } from 'components/Layout';
import { IApproveCourseDto } from 'types/api.dto';
import { IRequest } from 'types/request';
import { NO_REQUESTS } from 'constants/messages';
import { Loaders } from 'enums/loader';

import RequestItem from './RequestItem';
import { RequestsWrapper } from './styled';

interface IRequestsProps {
  approveRequest: (variables: IApproveCourseDto) => void;
  declineRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineLoading: boolean;
  isLoading?: boolean;
  targetId?: string;
  requests?: IRequest[];
}

const Requests: FC<IRequestsProps> = ({ requests, isLoading, targetId, ...props }) => (
  <AuthorizedLayout pageName="Requests">
    {isLoading ? (
      <Loader color="primary" type={Loaders.content} />
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
