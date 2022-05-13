import { FC } from 'react';

import { NO_REQUESTS } from 'constants/messages';
import Loader from 'components/Loader';
import PageTitle from 'components/PageTitle';
import NoContent from 'components/NoContent';
import { Loaders } from 'enums/loader';
import { IApproveCourseDto } from 'types/api.dto';
import { IRequest } from 'types/request';

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
  <PageTitle title="Requests">
    {isLoading ? (
      <Loader type={Loaders.content} />
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
  </PageTitle>
);

export default Requests;
