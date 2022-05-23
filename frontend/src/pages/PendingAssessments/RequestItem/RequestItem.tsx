import { FC } from 'react';

import Avatar from 'components/Avatar';
import Image from 'components/Image';
import Tooltip from 'components/Tooltip';
import { Size } from 'enums/sizes';
import { convertRequestTime } from 'utils/helpers/convertTime';
import { convertToFullName } from 'utils/helpers/convertToFullName';

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
  const userFullName = convertToFullName(firstName, lastName);

  return (
    <RequestContainer item container spacing={2}>
      <CustomGrid item xs={12} lg={5} xl={4}>
        <ImageWrapper>
          <Avatar size={Size.subsmall} avatar={userAvatar} />
        </ImageWrapper>
        <UserContainer>
          <UserName>{userFullName}</UserName>
          <Position>{position}</Position>
        </UserContainer>
      </CustomGrid>
      <CourseContainer item xs={5} lg={3} xl={2}>
        <CourseImageWrapper>
          <Image imageUrl={courseAvatar} />
        </CourseImageWrapper>
        <Tooltip title={title}>
          <CourseTitle>{title}</CourseTitle>
        </Tooltip>
      </CourseContainer>
      <CustomGrid item xs={5} lg={3} xl={2}>
        <RequestTechnologies technologies={technologies} />
      </CustomGrid>
      <TimeContainer item xs={2} lg={1}>
        <SecondaryText>{convertRequestTime(elapsed)}</SecondaryText>
      </TimeContainer>
      <RequestButtons id={clientCourseId} {...props} />
    </RequestContainer>
  );
};

export default RequestItem;
