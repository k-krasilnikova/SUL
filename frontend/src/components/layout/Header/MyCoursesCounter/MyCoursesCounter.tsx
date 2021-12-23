import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

import { Counter, MyCoursesCounterContent, MyCoursesCounterNumber } from 'components/Layout/styled';

interface Props {
  myCourses?: number;
}

const MyCoursesCounter: React.FC<Props> = ({ myCourses }) => (
  <Counter>
    <MyCoursesCounterContent>
      <VerifiedIcon fontSize="medium" color="secondary" />
      <MyCoursesCounterNumber>{myCourses}</MyCoursesCounterNumber>
    </MyCoursesCounterContent>
  </Counter>
);

export default MyCoursesCounter;
