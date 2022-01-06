import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';
import INITIAL_COURSES from 'constants/coursesList';

import { PageContainer, CourseButton, CourseActions } from './styled';

const size = 'medium';

const CoursesList: React.FC = () => (
  <AuthorizedLayout pageName="Courses List">
    <PageContainer>
      {INITIAL_COURSES.map((course, id) => (
        <CourseItem
          key={id}
          title={course.title}
          description={course.description}
          duration={course.duration}
          lessons={course.lessons}
          size={size}
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
  </AuthorizedLayout>
);

export default CoursesList;
