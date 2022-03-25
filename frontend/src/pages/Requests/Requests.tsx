import React from 'react';
import { Grid } from '@mui/material';

import Loader from 'components/Loader';
import { NoContent } from 'components/NoContent';
import { AuthorizedLayout } from 'components/Layout';
import { SIZE } from 'constants/sizes';
import { LOADER } from 'constants/loaderTypes';
import { NO_REQUESTS } from 'constants/messages';
import { IRequestsProps } from 'types/request';

import { RequestsWrapper } from './styled';
import RequestItem from './RequestItem';

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
    <RequestsWrapper>
      {isLoading ? (
        <Loader color="primary" type={LOADER.content} />
      ) : (
        <Grid container>
          {requests?.length ? (
            requests.map((request) => {
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
            })
          ) : (
            <NoContent message={NO_REQUESTS} size={SIZE.medium} />
          )}
        </Grid>
      )}
    </RequestsWrapper>
  </AuthorizedLayout>
);

export default Requests;
