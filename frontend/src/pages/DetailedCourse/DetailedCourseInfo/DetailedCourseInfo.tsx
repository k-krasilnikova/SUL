import React from 'react';

import ProgressBar from 'components/ProgressBar';
import { OPEN_FULL_TEXT, PROGRESS_COLOR } from 'constants/detailedCourse';
import { IDetailedCourseInfo } from 'types/detailedCourse';
import { shortifyDetailedCourseDescription } from 'utils/helpers/shortifyDetailedCourseDescription';

import {
  ButtonFullText,
  DetailedCourseText,
  DetailedCourseTextMobile,
  DetailedCourseTitle,
  ImageWrapper,
} from './styled';

const DetailedCourseInfo: React.FC<IDetailedCourseInfo> = ({
  commonCourseData,
  isProgressBarDisplayed,
  toggleFullText,
  progressValue,
  progressText,
  progressVariant,
  isFullTextOpen,
}) => (
  <>
    <ImageWrapper imageUrl={commonCourseData.avatar} />
    {isProgressBarDisplayed && (
      <ProgressBar
        size="large"
        text={progressText}
        textColor={PROGRESS_COLOR}
        variant={progressVariant}
        value={progressValue}
      />
    )}
    <DetailedCourseTitle>{commonCourseData.title}</DetailedCourseTitle>
    {isFullTextOpen ? (
      <DetailedCourseTextMobile>{commonCourseData.description}</DetailedCourseTextMobile>
    ) : (
      <DetailedCourseTextMobile>
        {shortifyDetailedCourseDescription(commonCourseData.description)}
        <ButtonFullText onClick={toggleFullText}>
          {!isFullTextOpen && OPEN_FULL_TEXT}
        </ButtonFullText>
      </DetailedCourseTextMobile>
    )}
    <DetailedCourseText>{commonCourseData.description}</DetailedCourseText>
  </>
);

export default DetailedCourseInfo;
