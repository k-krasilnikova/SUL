import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import { NoContent } from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { PATHS } from 'constants/routes';
import { ResponseDataMyCourses } from 'types/responseDataMyCourses';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  DetailsButton,
  StartCourseButton,
} from './styled';

const MyCoursesList: React.FC<ResponseDataMyCourses> = ({ data, isLoading }) => (
  <AuthorizedLayout pageName="My Courses">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : data?.length ? (
      <PageContainer container rowSpacing="24px" columnSpacing="30px">
        {data?.map((object) => (
          <Suspense fallback={<Loader color="primary" type={LOADER.content} key={object._id} />}>
            <GridItem key={object._id} item xl={6} lg={6} md={12} sm={12}>
              <CourseItem
                key={object.course._id}
                title={object.course.title}
                description={object.course.description}
                duration={object.course.duration}
                lessons={object.course.lessons}
              >
                <CourseActionsBox>
                  <CourseActions>
                    <Link to={`${PATHS.myCourses}/${object._id}`}>
                      <DetailsButton variant="mediumOutlined">Details</DetailsButton>
                    </Link>
                    <Link to={`${PATHS.learnCourse}/${object._id}`}>
                      <StartCourseButton color="primary" variant="mediumContained">
                        Start the course
                      </StartCourseButton>
                    </Link>
                  </CourseActions>
                </CourseActionsBox>
              </CourseItem>
            </GridItem>
          </Suspense>
        ))}
      </PageContainer>
    ) : (
      <NoContent message={NO_COURSES} />
    )}
  </AuthorizedLayout>
);
export default MyCoursesList;
