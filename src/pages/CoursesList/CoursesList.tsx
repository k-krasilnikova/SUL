import React from 'react';

import { Grid } from '@material-ui/core';
import { AuthorizedLayout } from 'components/Layout';
import { PageContainer, CourseButton, CourseActions } from './styled';
import { CourseItem } from 'components/Course';

const INITIAL_COURSES = [
  {
    title: 'Lorem',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: '20',
  },
  {
    title: 'Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: '20',
  },
  {
    title: 'Simply',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: '20',
  },
  {
    title: 'Dummy',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    duration: '02:40:00',
    lessons: '20',
  },
];

export interface CourseStyleTypes {
  fontSize?: number;
  lineHeight?: number;
}

const styleProps: CourseStyleTypes = {
  fontSize: 14,
  lineHeight: 18,
};

const CoursesList: React.FC = () => (
  <AuthorizedLayout pageName="Courses List">
    <PageContainer container spacing={0.5}>
      {INITIAL_COURSES.map((course, id) => (
        <Grid key={id} item lg={6}>
          <CourseItem
            key={id}
            title={course.title}
            description={course.description}
            duration={course.duration}
            lessons={course.lessons}
            styleProps={styleProps}
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
        </Grid>
      ))}
    </PageContainer>
  </AuthorizedLayout>
);

export default CoursesList;
