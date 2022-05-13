import { FC } from 'react';

import { AuthorizedLayout, MobileSearch } from 'components/Layout';
import { IDetailedCourse } from 'types/detailedCourse';

import { ButtonsWrapper, DetailedCourseWrapper, InnerWrapper, MobileSearchWrapper } from './styled';
import BackButton from './BackButton';
import SimilarCourses from './SimilarCourses';
import DetailedCourseInfo from './DetailedCourseInfo';
import DetailedCourseActions from './DetailedCourseActions';
import EditCourseButton from './EditCourseButton';

const DetailedCourse: FC<IDetailedCourse> = ({ page, commonCourseData, isAdmin, ...props }) => (
  <AuthorizedLayout pageName="Course">
    <DetailedCourseWrapper>
      <ButtonsWrapper>
        <BackButton page={page} />
        {isAdmin && <EditCourseButton {...props} />}
      </ButtonsWrapper>
      <MobileSearchWrapper>
        <MobileSearch />
      </MobileSearchWrapper>
      <InnerWrapper>
        <DetailedCourseInfo commonCourseData={commonCourseData} {...props} />
        <DetailedCourseActions
          commonCourseData={commonCourseData}
          page={page}
          isAdmin={isAdmin}
          {...props}
        />
        {!!commonCourseData.similarCourses.length && (
          <SimilarCourses
            similarCourses={commonCourseData.similarCourses}
            windowWidth={props.windowWidth}
          />
        )}
      </InnerWrapper>
    </DetailedCourseWrapper>
  </AuthorizedLayout>
);

export default DetailedCourse;
