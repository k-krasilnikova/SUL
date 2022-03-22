import React from 'react';
import { Box, Divider, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

import { buttonSpinner } from 'animations';
import { SIZE } from 'constants/sizes';
import { LOADER } from 'constants/loaderTypes';
import { NO_REQUESTS } from 'constants/messages';
import Loader from 'components/Loader';
import { UserAvatar } from 'components/Avatar';
import { NoContent } from 'components/NoContent';
import ButtonLoader from 'components/ButtonLoader';
import Image from 'components/Image/Image';
import { AuthorizedLayout } from 'components/Layout';
import { Request } from 'types/request';

import {
  RequestsWrapper,
  Row,
  Cell,
  UserName,
  ImageWrapper,
  ActionButton,
  InterviewActionButton,
  SecondaryText,
  Position,
  CourseImageWrapper,
  RequestsTable,
  CourseTitle,
  ButtonCell,
  TimeCell,
  CourseCell,
  SearchWrapper,
  SearchEmployee,
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
    <SearchWrapper>
      <SearchEmployee
        disableUnderline
        placeholder="Search"
        inputProps={{ maxLength: 100 }}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Search color="disabled" fontSize="medium" />
          </InputAdornment>
        }
      />
      <Divider sx={{ width: '445px' }} />
    </SearchWrapper>
    <RequestsWrapper>
      {isLoading ? (
        <Loader color="primary" type={LOADER.content} />
      ) : (
        <RequestsTable>
          {requests?.length ? (
            requests.map((request) => {
              const isTargetRequest = targetId === request._id;
              return (
                <Row key={request._id}>
                  <Cell>
                    <ImageWrapper>
                      <UserAvatar size={SIZE.small} avatar={request.user.avatar} />
                    </ImageWrapper>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <UserName>{`${request.user.firstName} ${request.user.lastName}`}</UserName>
                      <Position>{request.user.position}</Position>
                    </Box>
                  </Cell>
                  <CourseCell>
                    <CourseImageWrapper>
                      <Image imageUrl={request.course.avatar} />
                    </CourseImageWrapper>
                    <CourseTitle>{request.course.title}</CourseTitle>
                  </CourseCell>
                  <TimeCell>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <SecondaryText>{`${request.elapsed.hours}h${request.elapsed.minutes}m`}</SecondaryText>
                    </Box>
                  </TimeCell>
                  <ButtonCell>
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
                  </ButtonCell>
                  <ButtonCell>
                    <InterviewActionButton
                      variant="mediumContained"
                      onClick={() => approveRequest(request._id)}
                      disabled={approveLoading}
                    >
                      {approveLoading && isTargetRequest ? (
                        <ButtonLoader buttonSpinner={buttonSpinner} />
                      ) : (
                        'Accept with interview'
                      )}
                    </InterviewActionButton>
                  </ButtonCell>
                  <ButtonCell>
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
                  </ButtonCell>
                </Row>
              );
            })
          ) : (
            <NoContent message={NO_REQUESTS} size={SIZE.medium} />
          )}
        </RequestsTable>
      )}
    </RequestsWrapper>
  </AuthorizedLayout>
);

export default Requests;
