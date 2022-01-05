import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

import { Counter, MyCoursesCounterContent, MyCoursesCounterNumber } from 'components/Layout/styled';

interface Props {
  myCoursesNumber?: number;
}

const MyCoursesCounter: React.FC<Props> = ({ myCoursesNumber }) => (
  <Counter>
    <MyCoursesCounterContent>
      <VerifiedIcon fontSize="medium" color="secondary" />
      <MyCoursesCounterNumber>{myCoursesNumber}</MyCoursesCounterNumber>
    </MyCoursesCounterContent>
  </Counter>
);

export default MyCoursesCounter;
