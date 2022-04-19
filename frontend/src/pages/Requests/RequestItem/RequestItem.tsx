import React from 'react';

import Avatar from 'components/Avatar';
import Image from 'components/Image';
import { SIZE } from 'constants/sizes';
import { REQUEST_STATUS } from 'constants/requests';
import { IRequest } from 'types/request';
import { convertRequestTime } from 'utils/helpers/convertTime';

import {
  CourseImageWrapper,
  CourseTitle,
  ImageWrapper,
  Position,
  SecondaryText,
  UserName,
  RequestContainer,
  CustomGrid,
  UserContainer,
  CourseContainer,
  TimeContainer,
  DisabledText,
} from './styled';
import RequestButtons from './RequestButtons';

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
        <Avatar size={SIZE.small} avatar={request?.user.avatar} />
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
      <RequestButtons
        request={request}
        approveRequest={approveRequest}
        declineRequest={declineRequest}
        approveLoading={approveLoading}
        declineLoading={declineLoading}
        isTargetRequest={isTargetRequest}
      />
    ) : (
      <CustomGrid item xs={4}>
        <DisabledText>{status !== REQUEST_STATUS.pending && status}</DisabledText>
      </CustomGrid>
    )}
  </RequestContainer>
);

export default RequestItem;
