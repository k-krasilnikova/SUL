import React from 'react';

import { SIZE } from 'constants/sizes';
import { Request } from 'types/request';
import Loader from 'components/Loader';
import { buttonSpinner } from 'animations';
import { UserAvatar } from 'components/Avatar';
import { LOADER } from 'constants/loaderTypes';
import { NoContent } from 'components/NoContent';
import ButtonLoader from 'components/ButtonLoader';
import { AuthorizedLayout } from 'components/Layout';

import {
  RequestsWrapper,
  RequstsTable,
  Row,
  Cell,
  UserName,
  ImageWrapper,
  Text,
  ActionButton,
} from './styled';

interface IProps {
  isLoading: boolean;
  targetId: string;
  approveRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineRequest: (requestId: string) => void;
  declineLoading: boolean;
  requests?: Request[];
}

const HEADER_COLUMNS = ['Employee', 'Position', 'Course', 'Action', 'Action'];

const Requests: React.FC<IProps> = ({
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
        <RequstsTable>
          <Row>
            {HEADER_COLUMNS.map((headerItem) => (
              <Cell key={headerItem}>
                <Text bold>{headerItem}</Text>
              </Cell>
            ))}
          </Row>
          {requests?.length ? (
            requests.map((request) => {
              const isTargetRequest = targetId === request._id;

              return (
                <Row key={request._id}>
                  <Cell>
                    <ImageWrapper>
                      <UserAvatar size={SIZE.small} avatar={request.user.avatar} />
                    </ImageWrapper>
                    <UserName>{`${request.user.firstName} ${request.user.lastName}`}</UserName>
                  </Cell>
                  <Cell>
                    <Text>{request.user.position}</Text>
                  </Cell>
                  <Cell>
                    <Text>{request.course.title}</Text>
                  </Cell>
                  <Cell>
                    <ActionButton
                      variant="mediumContained"
                      onClick={() => approveRequest(request._id)}
                      disabled={approveLoading}
                    >
                      {approveLoading && isTargetRequest ? (
                        <ButtonLoader buttonSpinner={buttonSpinner} />
                      ) : (
                        'Accept'
                      )}
                    </ActionButton>
                  </Cell>
                  <Cell>
                    <ActionButton
                      variant="mediumOutlined"
                      onClick={() => declineRequest(request._id)}
                      disabled={declineLoading}
                    >
                      {declineLoading && isTargetRequest ? (
                        <ButtonLoader buttonSpinner={buttonSpinner} />
                      ) : (
                        'Reject'
                      )}
                    </ActionButton>
                  </Cell>
                </Row>
              );
            })
          ) : (
            <NoContent message="No requests" size={SIZE.medium} />
          )}
        </RequstsTable>
      )}
    </RequestsWrapper>
  </AuthorizedLayout>
);

export default Requests;
