import { FC, useState } from 'react';

import { useApproveRequest, useDeclineRequest, useGetCoursesRequests } from 'api/manager';
import { IApproveCourseDto } from 'types/api.dto';

import Requests from './Requests';

const RequestsContainer: FC = () => {
  const [actionTarget, setActionTarget] = useState<IApproveCourseDto>({ requestId: '' });

  const { data: requestsData, isLoading: isRequestsLoading } = useGetCoursesRequests();
  const { mutate: approveCourse, isLoading: isApproveLoading } = useApproveRequest();
  const { mutate: declineCourse, isLoading: isDeclineLoading } = useDeclineRequest();

  const approveRequest = (params: IApproveCourseDto) => {
    setActionTarget(params);
    approveCourse(params);
  };

  const declineRequest = (requestId: string) => {
    setActionTarget({ requestId });
    declineCourse(requestId);
  };

  return (
    <Requests
      requests={requestsData}
      actionTarget={actionTarget}
      isRequestsLoading={isRequestsLoading}
      isApproveLoading={isApproveLoading}
      isDeclineLoading={isDeclineLoading}
      approveRequest={approveRequest}
      declineRequest={declineRequest}
    />
  );
};

export default RequestsContainer;
