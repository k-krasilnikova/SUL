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
import { countProgress } from 'utils/helpers/countCourseProgress';

import {
  PageContainer,
  CourseActions,
  GridItem,
  CourseActionsBox,
  DetailsButton,
  StartCourseButton,
  MobileLink,
} from './styled';

interface Props {
  windowWidth?: string;
}

type MyCoursesProps = ResponseDataMyCourses & Props;

const MyCoursesList: React.FC<MyCoursesProps> = ({ data, isLoading, windowWidth }) => (
  <AuthorizedLayout pageName="My Courses">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : data?.length ? (
      <PageContainer container>
        {data?.map((object) => (
          <Suspense fallback={<Loader color="primary" type={LOADER.content} key={object._id} />}>
            <GridItem key={object._id} item xl={6} lg={12} md={12} sm={12}>
              <MobileLink
                to={`${PATHS.myCourses}/${object._id}`}
                onClick={(e) => {
                  if (windowWidth === 'large') {
                    e.preventDefault();
                  }
                }}
              >
                <CourseItem
                  key={object.course._id}
                  title={object.course.title}
                  description={object.course.description}
                  duration={object.course.duration}
                  lessons={object.course.lessons}
                  pageName="myCourses"
                  status={object.status}
                  progress={countProgress(object.progress)}
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
              </MobileLink>
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
