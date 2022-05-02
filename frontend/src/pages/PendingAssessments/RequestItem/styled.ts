import { styled } from '@mui/material';

import {
  Position as Pos,
  UserName as UName,
  CourseTitle as CTitle,
  SecondaryText as SecText,
} from 'pages/Requests/RequestItem/styled';

export const Position = styled(Pos)({
  color: '#131313',
});

export const UserName = styled(UName)({
  color: '#131313',
});

export const CourseTitle = styled(CTitle)({
  color: '#131313',
});

export const SecondaryText = styled(SecText)({
  color: '#8E8E93',
});

export {
  CustomGrid,
  ImageWrapper,
  RequestContainer,
  UserContainer,
  CourseContainer,
  CourseImageWrapper,
  TimeContainer,
} from 'pages/Requests/RequestItem/styled';
