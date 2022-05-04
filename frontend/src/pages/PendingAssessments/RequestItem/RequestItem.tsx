import { FC } from 'react';

import Avatar from 'components/Avatar';
import Image from 'components/Image';
import { Size } from 'enums/sizes';
import { convertRequestTime } from 'utils/helpers/convertTime';

import {
  CustomGrid,
  RequestContainer,
  UserContainer,
  UserName,
  Position,
  CourseContainer,
  CourseImageWrapper,
  ImageWrapper,
  CourseTitle,
  TimeContainer,
  SecondaryText,
} from './styled';
import RequestButtons from './RequestButtons';
import RequestTechnologies from './RequestTechnologies';
import { IAssessmentRequestItemProps } from '../types';

const RequestItem: FC<IAssessmentRequestItemProps> = ({
  user,
  course,
  elapsed,
  clientCourseId,
  ...props
}) => {
  const { avatar: userAvatar, firstName, lastName, position } = user || {};
  const { avatar: courseAvatar, title, technologies } = course || {};

  return (
    <RequestContainer item container spacing={2}>
      <CustomGrid item xs={3}>
        <ImageWrapper>
          <Avatar size={Size.small} avatar={userAvatar} />
        </ImageWrapper>
        <UserContainer>
          <UserName>{`${firstName} ${lastName}`}</UserName>
          <Position>{position}</Position>
        </UserContainer>
      </CustomGrid>
      <CourseContainer item xs={3}>
        <CourseImageWrapper>
          <Image imageUrl={courseAvatar} />
        </CourseImageWrapper>
        <CourseTitle>{title}</CourseTitle>
      </CourseContainer>
      <CustomGrid item xs={2}>
        <RequestTechnologies technologies={technologies} />
      </CustomGrid>
      <TimeContainer item xs={1}>
        <SecondaryText>{convertRequestTime(elapsed)}</SecondaryText>
      </TimeContainer>
      <RequestButtons id={clientCourseId} {...props} />
    </RequestContainer>
  );
};

export default RequestItem;
