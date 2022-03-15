import React, { useState } from 'react';

import { useGetCoursesRequests, useApproveRequest, useDeclineRequest } from 'api/courses';

import Requests from './Requests';

const RequestsContainer: React.FC = () => {
  const [targetId, setTargetId] = useState<string>('');

  const { data: requests, isLoading } = useGetCoursesRequests();
  const { mutateAsync: approveCourse, isLoading: approveLoading } = useApproveRequest();
  const { mutateAsync: declineCourse, isLoading: declineLoading } = useDeclineRequest();

  const approveRequest = (requestId: string) => {
    setTargetId(requestId);
    approveCourse(requestId);
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