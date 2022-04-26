import React from 'react';

import { buttonSpinner } from 'animations';
import { ButtonsWrapper, CustomButton } from 'components/Button/ButtonVariants/styled';
import { ActionButton } from 'components/Button/ButtonVariants';
import CourseInfo from 'components/Course/CourseInfo';
import ButtonLoader from 'components/ButtonLoader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { COURSE_DISABLE_DAYS } from 'constants/time';
import { PAGES } from 'constants/pages';
import { COURSE_LABELS } from 'constants/statuses';
import { IDetailedCourseActions } from 'types/detailedCourse';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import { Info } from 'enums/info';

import DeleteCourseButton from './DeleteCourseButton';
import { CourseInfoBox, DetailedCourseActionsBox } from './styled';

const DetailedCourseActions: React.FC<IDetailedCourseActions> = ({
  commonCourseData,
  isAdmin,
  isLoading,
  handleApplyCourse,
  page,
  clientCourseData,
  id,
  status,
  isCourseCompleted,
}) => (
  <DetailedCourseActionsBox>
    <CourseInfoBox>
      <CourseInfo
        duration={convertDurationToString(commonCourseData.duration)}
        lessons={commonCourseData.lessons}
        type={Info.detailedCourse}
      />
    </CourseInfoBox>
    {isAdmin ? (
      <DeleteCourseButton />
    ) : page === PAGES.coursesList ? (
      <CustomButton
        color="primary"
        variant={isLoading ? 'mediumOutlined' : 'mediumContained'}
        disabled={isLoading}
        onClick={handleApplyCourse}
      >
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.applyCourse}
      </CustomButton>
    ) : (
      <ButtonsWrapper>
        {!isCourseCompleted && (
          <ActionButton
            label={COURSE_LABELS[status]}
            status={status}
            progress={clientCourseData?.progress}
            timeout={COURSE_DISABLE_DAYS}
            courseId={id}
            applyDate={clientCourseData?.applyDate}
          />
        )}
      </ButtonsWrapper>
    )}
  </DetailedCourseActionsBox>
);

export default DetailedCourseActions;
