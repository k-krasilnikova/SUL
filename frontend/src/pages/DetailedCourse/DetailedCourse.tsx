import React from 'react';
import { Grid, Typography } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import { useParams } from 'react-router';

import { AuthorizedLayout } from 'components/Layout';
import Button from 'components/Button';
import Image from 'components/Image';
import CourseInfo from 'components/Course/CourseInfo';
import { CourseItem } from 'components/Course';
import useGetCourseInfo from 'api/courses/getCourseInfo';
import { CourseActions } from 'pages/CoursesList/styled';
import { Link } from 'react-router-dom';
import { PATHS } from 'constants/routes';
import { Box } from '@mui/system';

import {
  DetailedCourseActionsBox,
  DetailedCourseText,
  DetailedCourseTitle,
  DetailedCourseWrapper,
  ImageWrapper,
  InnerWrapper,
  ProgressBarBox,
  StyledCircularProgressbar,
} from './styled';

const INITIAL_COURSE = {
  _id: '123',
  title: 'Test Title',
  description:
    'To Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.To Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.To Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  duration: '23:40:00',
  lessons: 20,
};

const DetailedCourse: React.FC = () => {
  const params = useParams();
  const { data } = useGetCourseInfo(params._id);
  return (
    <AuthorizedLayout pageName={INITIAL_COURSE.title}>
      <DetailedCourseWrapper>
        <Button variant="contained">Back</Button>
        <InnerWrapper>
          <ProgressBarBox>
            <StyledCircularProgressbar value={0} text="0%" strokeWidth={10} />
          </ProgressBarBox>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <Box>
            <DetailedCourseTitle>{INITIAL_COURSE.title}</DetailedCourseTitle>
            <DetailedCourseText>{INITIAL_COURSE.description}</DetailedCourseText>
          </Box>
          <DetailedCourseActionsBox>
            <CourseInfo duration={INITIAL_COURSE.duration} lessons={INITIAL_COURSE.lessons} />
            <Button variant="contained">Start</Button>
          </DetailedCourseActionsBox>
          <Grid container sx={{ marginTop: '171px', marginBottom: '171px' }} xs={12}>
            <Grid item xs={8} sx={{ height: '300px', width: '600px' }}>
              <Typography sx={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '40px' }}>
                Similar Courses
              </Typography>
              <CourseItem
                title={data?.title}
                description={data?.description}
                duration={data?.duration}
                lessons={data?.lessons}
              >
                <CourseActions>
                  <Link to={`${PATHS.coursesList}/${data?._id}`}>
                    <Button color="primary" variant="outlined">
                      Details
                    </Button>
                  </Link>
                  <Button color="primary" variant="contained">
                    Start the course
                  </Button>
                </CourseActions>
              </CourseItem>
            </Grid>
          </Grid>
        </InnerWrapper>
      </DetailedCourseWrapper>
    </AuthorizedLayout>
  );
};

export default DetailedCourse;
