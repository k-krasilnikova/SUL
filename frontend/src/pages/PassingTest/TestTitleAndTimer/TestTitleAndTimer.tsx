import { FC, memo } from 'react';
import { Box } from '@mui/material';

import CountDownTimer from 'components/CountDownTimer';
import { ITestTitleAndTimer } from 'types/test';

import { CountDownText, CourseTestTitle, TitleBox } from './styled';

const TestTitleAndTimer: FC<ITestTitleAndTimer> = ({ title, duration }) => (
  <Box>
    <TitleBox>
      <CourseTestTitle>{title}</CourseTestTitle>
      <CountDownText>{Boolean(duration) && <CountDownTimer duration={duration} />}</CountDownText>
    </TitleBox>
  </Box>
);

export default memo(TestTitleAndTimer);
