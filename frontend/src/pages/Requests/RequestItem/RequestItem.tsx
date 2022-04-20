import { FC } from 'react';

import Avatar from 'components/Avatar';
import Image from 'components/Image';
import { REQUEST_STATUS } from 'constants/requests';
import { Size } from 'enums/sizes';
import { convertRequestTime } from 'utils/helpers/convertTime';
import { IRequest } from 'types/request';

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

interface IReuestItemProps {
  request: IRequest;
  approveRequest: (requestId: string) => void;
  declineRequest: (requestId: string) => void;
  approveLoading: boolean;
  declineLoading: boolean;
  isTargetRequest?: boolean;
}

const RequestItem: FC<IReuestItemProps> = ({
  request: { _id, status, course, user, elapsed },
  ...props
}) => (
  <RequestContainer item container spacing={2}>
    <CustomGrid item xs={4}>
      <ImageWrapper>
        <Avatar size={Size.small} avatar={user.avatar} />
      </ImageWrapper>
      <UserContainer>
        <UserName status={status}>{`${user.firstName} ${user.lastName}`}</UserName>
        <Position status={status}>{user.position}</Position>
      </UserContainer>
    </CustomGrid>
    <CourseContainer item xs={3}>
      <CourseImageWrapper>
        <Image imageUrl={course.avatar} />
      </CourseImageWrapper>
      <CourseTitle status={status}>{course.title}</CourseTitle>
    </CourseContainer>
    <TimeContainer item xs={1}>
      <SecondaryText status={status}>{convertRequestTime(elapsed)}</SecondaryText>
    </TimeContainer>
    {status === REQUEST_STATUS.pending ? (
      <RequestButtons id={_id} {...props} />
    ) : (
      <CustomGrid item xs={4}>
        <DisabledText>{status !== REQUEST_STATUS.pending && status}</DisabledText>
      </CustomGrid>
    )}
  </RequestContainer>
);

export default RequestItem;
