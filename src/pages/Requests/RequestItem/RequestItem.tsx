import React from 'react';

import { UserAvatar } from 'components/Avatar';
import { Image } from 'components/Image';
import { BUTTON_CONTENT, REQUEST_STATUS } from 'constants/requests';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';
import { IRequest } from 'types/request';
import { SIZE } from 'constants/sizes';
import { convertRequestTime } from 'utils/helpers/convertTime';

import {
  CourseImageWrapper,
  CourseTitle,
  ImageWrapper,
  Position,
  SecondaryText,
  UserName,
  ActionButton,
  InterviewActionButton,
  RequestContainer,
  CustomGrid,
  UserContainer,
  CourseContainer,
  ButtonsContainer,
  TimeContainer,
  DisabledText,
} from './styled';

const RequestItem: React.FC<IRequest> = ({
  request,
  approveRequest,
  declineRequest,
  approveLoading,
  declineLoading,
  isTargetRequest,
  status,
}) => (
  <RequestContainer item container spacing={2}>
    <CustomGrid item xs={4}>
      <ImageWrapper>
        <UserAvatar size={SIZE.small} avatar={request?.user.avatar} />
      </ImageWrapper>
      <UserContainer>
        <UserName
          status={status}
        >{`${request?.user.firstName} ${request?.user.lastName}`}</UserName>
        <Position status={status}>{request?.user.position}</Position>
      </UserContainer>
    </CustomGrid>
    <CourseContainer item xs={3}>
      <CourseImageWrapper>
        <Image imageUrl={request?.course.avatar} />
      </CourseImageWrapper>
      <CourseTitle status={status}>{request?.course.title}</CourseTitle>
    </CourseContainer>
    <TimeContainer item xs={1}>
      <SecondaryText status={status}>{convertRequestTime(request?.elapsed)}</SecondaryText>
    </TimeContainer>
    {request?.status === REQUEST_STATUS.pending ? (
      <ButtonsContainer item xs={4} rowSpacing={1}>
        <ActionButton
          variant="mediumContained"
          onClick={() => approveRequest(request?._id)}
          disabled={approveLoading}
        >
          {approveLoading && isTargetRequest ? (
            <ButtonLoader buttonSpinner={buttonSpinner} />
          ) : (
            BUTTON_CONTENT.accept
          )}
        </ActionButton>
        <InterviewActionButton
          variant="mediumContained"
          onClick={() => approveRequest(request._id)}
          disabled={approveLoading}
        >
          {approveLoading && isTargetRequest ? (
            <ButtonLoader buttonSpinner={buttonSpinner} />
          ) : (
            BUTTON_CONTENT.acceptWithInterview
          )}
        </InterviewActionButton>
        <ActionButton
          variant="mediumOutlined"
          onClick={() => declineRequest(request._id)}
          disabled={declineLoading}
        >
          {declineLoading && isTargetRequest ? (
            <ButtonLoader buttonSpinner={buttonSpinner} />
          ) : (
            BUTTON_CONTENT.reject
          )}
        </ActionButton>
      </ButtonsContainer>
    ) : (
      <CustomGrid item xs={4}>
        <DisabledText>{status !== REQUEST_STATUS.pending && status}</DisabledText>
      </CustomGrid>
    )}
  </RequestContainer>
);

export default RequestItem;
