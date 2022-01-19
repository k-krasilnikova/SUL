import React from 'react';
import { Link } from 'react-router-dom';

import { useGetMyCourses } from 'api/myCourses';
import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import NoContent from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { PATHS } from 'constants/routes';

import { PageContainer, CourseButton, CourseActions } from './styled';

const MyCourses: React.FC = () => {
  const { data } = useGetMyCourses();
  return (
    <AuthorizedLayout pageName="My Courses">
      {data?.length ? (
        <PageContainer>
          {data?.map((course) => (
            <CourseItem
              key={course._id}
              title={course.title}
              description={course.description}
              duration={course.duration}
              lessons={course.lessons}
            >
              <CourseActions>
                <CourseButton color="primary" variant="contained">
                  Details
                </CourseButton>
                <Link to={`${PATHS.myCourses}/${course._id}`}>
                  <CourseButton color="primary" variant="contained">
                    Start the course
                  </CourseButton>
                </Link>
              </CourseActions>
            </CourseItem>
          ))}
        </PageContainer>
      ) : (
        <NoContent message={NO_COURSES} />
      )}
    </AuthorizedLayout>
  );
};

export default MyCourses;
