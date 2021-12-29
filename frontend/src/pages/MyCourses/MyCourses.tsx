import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

import CourseItem from './Course';
import { PageContainer } from './styled';

const INITIAL = {
  title:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  language: 'English',
  duration: '02:40:00',
  lessons: '20',
  link: 'link.io',
};

const MyCourses: React.FC = () => (
  <AuthorizedLayout pageName="My Courses">
    <PageContainer>
      <CourseItem
        title={INITIAL.title}
        description={INITIAL.description}
        language={INITIAL.language}
        duration={INITIAL.duration}
        lessons={INITIAL.lessons}
        link={INITIAL.link}
      />
      <CourseItem
        title={INITIAL.title}
        description={INITIAL.description}
        language={INITIAL.language}
        duration={INITIAL.duration}
        lessons={INITIAL.lessons}
        link={INITIAL.link}
      />
    </PageContainer>
  </AuthorizedLayout>
);

export default MyCourses;
