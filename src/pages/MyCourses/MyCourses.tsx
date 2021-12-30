import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

import { CourseItem } from 'components/Course';
import { PageContainer, CourseButton } from './styled';

const INITIAL_COURSES = [
  {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    language: 'English',
    duration: '02:40:00',
    lessons: '20',
    link: 'link.io',
  },
  {
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    language: 'English',
    duration: '02:40:00',
    lessons: '20',
    link: 'link.io',
  },
];

const MyCourses: React.FC = () => (
  <AuthorizedLayout pageName="My Courses">
    <PageContainer>
      {INITIAL_COURSES.map((course, id) => (
        <CourseItem
          key={id}
          title={course.title}
          description={course.description}
          language={course.language}
          duration={course.duration}
          lessons={course.lessons}
          link={course.link}
        >
          <CourseButton color="primary" variant="contained">
            Start the test
          </CourseButton>
          <CourseButton color="primary" variant="contained">
            Details
          </CourseButton>
        </CourseItem>
      ))}
    </PageContainer>
  </AuthorizedLayout>
);

export default MyCourses;
