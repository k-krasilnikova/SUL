import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import { CourseItem } from 'components/Course';

import { PageContainer, CourseButton, CourseActions } from './styled';

const INITIAL_COURSES = [
  {
    _id: 1,
    title: 'Lorem',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: 30,
  },
  {
    _id: 2,
    title: 'Lorem',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: 20,
  },
  {
    _id: 3,
    title: 'Lorem',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: 13,
  },
  {
    _id: 4,
    title: 'Lorem',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: 34,
  },
];

const MyCourses: React.FC = () => (
  <AuthorizedLayout pageName="My Courses">
    <PageContainer>
      {INITIAL_COURSES.map((course) => (
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
  </AuthorizedLayout>
);

export default MyCourses;
