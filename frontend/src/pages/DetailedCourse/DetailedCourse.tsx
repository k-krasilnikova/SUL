import { FC } from 'react';

import { AuthorizedLayout, MobileSearch } from 'components/Layout';
import { IDetailedCourse } from 'types/detailedCourse';

import { DetailedCourseWrapper, InnerWrapper, MobileSearchWrapper } from './styled';
import BackButton from './BackButton';
import SimilarCourses from './SimilarCourses';
import DetailedCourseActions from './DetailedCourseActions';
import DetailedCourseInfo from './DetailedCourseInfo';

const DetailedCourse: FC<IDetailedCourse> = ({ page, commonCourseData, ...props }) => (
  <AuthorizedLayout pageName="Course">
    <DetailedCourseWrapper>
      <BackButton page={page} />
      <MobileSearchWrapper>
        <MobileSearch />
      </MobileSearchWrapper>
      <InnerWrapper>
        <DetailedCourseInfo commonCourseData={commonCourseData} {...props} />
        <DetailedCourseActions commonCourseData={commonCourseData} page={page} {...props} />
        <SimilarCourses
          similarCourses={commonCourseData.similarCourses}
          windowWidth={props.windowWidth}
        />
      </InnerWrapper>
    </DetailedCourseWrapper>
  </AuthorizedLayout>
);

export default DetailedCourse;
