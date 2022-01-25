import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

import { AuthorizedLayout } from 'components/Layout';
import { Button } from 'components/Button';
import { Image } from 'components/Image';
import CourseInfo from 'components/Course/CourseInfo';
import { CourseItem } from 'components/Course';
import { ProgressBar } from 'components/ProgressBar';
import { CourseActions } from 'pages/CoursesList/styled';
import { PATHS } from 'constants/routes';
import { INITIAL_DETAILED_COURSE } from 'constants/detailedCourse';

import {
  DetailedCourseActionsBox,
  DetailedCourseText,
  DetailedCourseTitle,
  DetailedCourseWrapper,
  ImageWrapper,
  InnerWrapper,
  SimilarCoursesItemWrapper,
  SimilarCoursesTitle,
  SimilarCoursesWrapper,
  StyledButton,
} from './styled';

interface IProps {
  data?: {
    _id?: string;
    title?: string;
    description?: string;
    duration?: string;
    lessons?: number;
  };
  handleApplyCourse?: () => void;
}

const DetailedCourse: React.FC<IProps> = ({ handleApplyCourse, data }) => (
  <AuthorizedLayout pageName={INITIAL_DETAILED_COURSE.title}>
    <DetailedCourseWrapper>
      <Link to={PATHS.coursesList}>
        <Button variant="contained">Back</Button>
      </Link>
      <InnerWrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <ProgressBar />
        <Box>
          <DetailedCourseTitle>{INITIAL_DETAILED_COURSE.title} </DetailedCourseTitle>
          <DetailedCourseText>{INITIAL_DETAILED_COURSE.description}</DetailedCourseText>
        </Box>
        <DetailedCourseActionsBox>
          <CourseInfo
            duration={INITIAL_DETAILED_COURSE.duration}
            lessons={INITIAL_DETAILED_COURSE.lessons}
          />
          <Button variant="contained" onClick={handleApplyCourse}>
            Start
          </Button>
        </DetailedCourseActionsBox>
        <SimilarCoursesWrapper container xs={12}>
          <SimilarCoursesItemWrapper item xs={8}>
            <SimilarCoursesTitle>Similar Courses</SimilarCoursesTitle>
            <CourseItem
              title={data?.title}
              description={INITIAL_DETAILED_COURSE.description}
              duration={data?.duration}
              lessons={data?.lessons}
            >
              <CourseActions>
                <Link to={`${PATHS.coursesList}/${data?._id}`}>
                  <Button color="primary" variant="outlined">
                    Details
                  </Button>
                </Link>
                <StyledButton onClick={handleApplyCourse} color="primary" variant="contained">
                  Start the course
                </StyledButton>
              </CourseActions>
            </CourseItem>
          </SimilarCoursesItemWrapper>
        </SimilarCoursesWrapper>
      </InnerWrapper>
    </DetailedCourseWrapper>
  </AuthorizedLayout>
);

export default DetailedCourse;
