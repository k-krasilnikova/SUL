import React, { useEffect } from 'react';

import { useGetCoursesRequests, useApproveRequest } from 'api/courses';

import Requests from './Requests';

const RequestsContainer: React.FC = () => {
  const { data: requests, isLoading } = useGetCoursesRequests();
  console.log(requests, isLoading);
  const { mutateAsync } = useApproveRequest();

  useEffect(() => {
    if (requests) {
      mutateAsync(requests[0]?._id);
    }
  }, [requests, mutateAsync]);

  return <Requests />;
};

export default RequestsContainer;
