import { FC } from 'react';

import ProgressBar from 'components/ProgressBar';
import { PROGRESS_COLOR } from 'constants/detailedCourse';
import { ButtonLabels } from 'constants/ButtonLabels';
import { shortifyDetailedCourseDescription } from 'utils/helpers/shortifyDetailedCourseDescription';

import {
  ButtonFullText,
  DetailedCourseText,
  DetailedCourseTextMobile,
  DetailedCourseTitle,
  ImageWrapper,
} from './styled';
import { IDetailedCourseInfo } from '../types';

const DetailedCourseInfo: FC<IDetailedCourseInfo> = ({
  commonCourseData,
  isProgressBarDisplayed,
  toggleFullText,
  progressValue,
  progressText,
  progressVariant,
  isFullTextOpen,
  isDescriptionLengthExceed,
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
          {isDescriptionLengthExceed && ButtonLabels.lookInFull}
        </ButtonFullText>
      </DetailedCourseTextMobile>
    )}
    <DetailedCourseText>{commonCourseData.description}</DetailedCourseText>
  </>
);

export default DetailedCourseInfo;
