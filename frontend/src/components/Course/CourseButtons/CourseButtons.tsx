import React from 'react';

import { Info } from 'enums/info';

import CourseInfo from '../CourseInfo';
import { ButtonsContainer, CourseInfoBox } from './styled';

interface ICourseButtons {
  duration?: string;
  lessons?: number;
  type?: Info;
  children?: React.ReactNode;
}

const CourseButtons: React.FC<ICourseButtons> = ({ type, duration, lessons, children }) => (
  <ButtonsContainer type={type}>
    <CourseInfoBox type={type}>
      <CourseInfo duration={duration} lessons={lessons} />
    </CourseInfoBox>
    {children}
  </ButtonsContainer>
);

export default CourseButtons;
