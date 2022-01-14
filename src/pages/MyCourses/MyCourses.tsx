import React from 'react';

import { useGetMyCourses } from 'api/myCourses';
import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import NoContent from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';

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
                <CourseButton color="primary" variant="contained">
                  Start the course
                </CourseButton>
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
