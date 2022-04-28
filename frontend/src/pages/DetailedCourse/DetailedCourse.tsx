import { FC } from 'react';

import { MobileSearch } from 'components/Layout';
import PageTitle from 'components/PageTitle';
import { IDetailedCourse } from 'types/detailedCourse';

import { ButtonsWrapper, DetailedCourseWrapper, InnerWrapper, MobileSearchWrapper } from './styled';
import BackButton from './BackButton';
import SimilarCourses from './SimilarCourses';
import DetailedCourseInfo from './DetailedCourseInfo';
import DetailedCourseActions from './DetailedCourseActions';
import EditCourseButton from './EditCourseButton';

const DetailedCourse: FC<IDetailedCourse> = ({ page, commonCourseData, isAdmin, ...props }) => (
  <PageTitle title="Course">
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
  </PageTitle>
);

export default DetailedCourse;
