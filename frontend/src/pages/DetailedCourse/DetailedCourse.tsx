import { FC } from 'react';

import { MobileSearch } from 'components/Layout';
import PageTitle from 'components/PageTitle';

import { IDetailedCourse } from './types';
import { DetailedCourseWrapper, InnerWrapper, MobileSearchWrapper } from './styled';
import BackButton from './components/BackButton';
import SimilarCourses from './SimilarCourses';
import CourseTechnologies from './AcquiredSkills';
import DetailedCourseActions from './DetailedCourseActions';
import DetailedCourseInfo from './DetailedCourseInfo';

const DetailedCourse: FC<IDetailedCourse> = ({ page, commonCourseData, windowWidth, ...props }) => {
  const { similarCourses, technologies } = commonCourseData;

  return (
    <PageTitle title="Course">
      <DetailedCourseWrapper>
        <BackButton page={page} />
        <MobileSearchWrapper>
          <MobileSearch />
        </MobileSearchWrapper>
        <InnerWrapper>
          <DetailedCourseInfo commonCourseData={commonCourseData} {...props} />
          <DetailedCourseActions commonCourseData={commonCourseData} page={page} {...props} />
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
