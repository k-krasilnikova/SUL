import React, { useState } from 'react';

import { useApproveRequest, useDeclineRequest, useGetCoursesRequests } from 'api/manager';
import { IApproveCourseDto } from 'types/api.dto';

import Requests from './Requests';

const RequestsContainer: React.FC = () => {
  const [targetId, setTargetId] = useState<string>('');

  const { data: requests, isLoading } = useGetCoursesRequests();
  const { mutateAsync: approveCourse, isLoading: approveLoading } = useApproveRequest();
  const { mutateAsync: declineCourse, isLoading: declineLoading } = useDeclineRequest();

  const approveRequest = ({
    clientCourseId: requestId,
    assessment: withAssessment,
  }: IApproveCourseDto) => {
    setTargetId(requestId);
    approveCourse({ clientCourseId: requestId, assessment: withAssessment });
  };

  const declineRequest = (requestId: string) => {
    setTargetId(requestId);
    declineCourse(requestId);
  };

  return (
    <Requests
      requests={requests}
      isLoading={isLoading}
      targetId={targetId}
      approveRequest={approveRequest}
      approveLoading={approveLoading}
      declineRequest={declineRequest}
      declineLoading={declineLoading}
    />
  );
};

export default RequestsContainer;
