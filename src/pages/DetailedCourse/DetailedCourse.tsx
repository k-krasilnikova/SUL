import { FC } from 'react';

import PageTitle from 'components/PageTitle';

import { IDetailedCourse } from './types';
import { ButtonsWrapper, DetailedCourseWrapper, InnerWrapper } from './styled';
import BackButton from './components/BackButton';
import CourseTechnologies from './AcquiredSkills';
import SimilarCourses from './SimilarCourses';
import DetailedCourseInfo from './DetailedCourseInfo';
import DetailedCourseActions from './DetailedCourseActions';
import EditCourseButton from './EditCourseButton';

const DetailedCourse: FC<IDetailedCourse> = ({
  page,
  commonCourseData,
  windowWidth,
  isAdmin,
  ...props
}) => {
  const { similarCourses, technologies } = commonCourseData;

  return (
    <PageTitle title="Course">
      <DetailedCourseWrapper>
        <ButtonsWrapper>
          <BackButton page={page} />
          {isAdmin && <EditCourseButton {...props} />}
        </ButtonsWrapper>
        <InnerWrapper>
          <DetailedCourseInfo commonCourseData={commonCourseData} {...props} />
          <DetailedCourseActions
            commonCourseData={commonCourseData}
            page={page}
            isAdmin={isAdmin}
            {...props}
          />
          {Boolean(technologies.length) && <CourseTechnologies technologies={technologies} />}
          {Boolean(similarCourses.length) && (
            <SimilarCourses similarCourses={similarCourses} windowWidth={windowWidth} />
          )}
        </InnerWrapper>
      </DetailedCourseWrapper>
    </PageTitle>
  );
};

export default DetailedCourse;
