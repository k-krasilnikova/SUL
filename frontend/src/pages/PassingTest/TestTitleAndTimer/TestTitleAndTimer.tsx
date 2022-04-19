import { Box } from '@mui/material';
import React from 'react';

import CountDownTimer from 'components/CountDownTimer';
import { ITestTitleAndTimer } from 'types/test';

import { CountDownText, CourseTestTitle, TitleBox } from './styled';

const TestTitleAndTimer: React.FC<ITestTitleAndTimer> = ({ testItem }) => (
  <Box>
    <TitleBox>
      <CourseTestTitle>{testItem.title}</CourseTestTitle>
      <CountDownText>
        <CountDownTimer duration={testItem.timeout} />
      </CountDownText>
    </TitleBox>
  </Box>
);

export default TestTitleAndTimer;
