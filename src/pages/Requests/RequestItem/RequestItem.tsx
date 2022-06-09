import { FC } from 'react';

import Avatar from 'components/Avatar';
import Image from 'components/Image';
import Tooltip from 'components/Tooltip';
import { REQUEST_STATUS } from 'constants/requests';
import { Size } from 'enums/sizes';
import { convertRequestTime } from 'utils/helpers/convertTime';

import RequestButtons from './RequestButtons';
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
import { IRequestItemProps } from '../types';

const RequestItem: FC<IRequestItemProps> = ({ request, ...props }) => {
  const { _id: requestId, status, course, user, elapsed } = request;
  const { firstName, lastName, avatar: userAvatar, position: userPosition } = user;
  const { title: courseTitle, avatar: courseAvatar } = course;

  return (
    <RequestContainer item container spacing={2}>
      <CustomGrid item xs={12} md={6} lg={4}>
        <ImageWrapper>
          <Avatar size={Size.subsmall} avatar={userAvatar} />
        </ImageWrapper>
        <UserContainer>
          <UserName status={status}>{`${firstName} ${lastName}`}</UserName>
          <Position status={status}>{userPosition}</Position>
        </UserContainer>
      </CustomGrid>
      <CourseContainer item xs={10} md={4} lg={3}>
        <CourseImageWrapper>
          <Image imageUrl={courseAvatar} />
        </CourseImageWrapper>
        <Tooltip title={courseTitle}>
          <CourseTitle status={status}>{courseTitle}</CourseTitle>
        </Tooltip>
      </CourseContainer>
      <TimeContainer item xs={2} md={2} lg={1}>
        <SecondaryText status={status}>{convertRequestTime(elapsed)}</SecondaryText>
      </TimeContainer>
      {status === REQUEST_STATUS.pending ? (
        <RequestButtons requestId={requestId} {...props} />
      ) : (
        <CustomGrid item xs={12} lg={4}>
          <DisabledText>{status !== REQUEST_STATUS.pending && status}</DisabledText>
        </CustomGrid>
      )}
    </RequestContainer>
  );
};

export default RequestItem;
