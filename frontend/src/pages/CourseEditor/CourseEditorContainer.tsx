import { FC } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetCourseInfo } from 'api/courses';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import CourseEditor from './CourseEditor';

const CourseEditorContainer: FC = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (): void => {},
  });

  const params = useParams();
  const basePath = transformRoute(PATHS.courseEditor, params.courseId);
  const { data: courseData, isLoading: isCourseDataLoading } = useGetCourseInfo(params.courseId);

  return (
    <FormikProvider value={formik}>
      <CourseEditor
        basePath={basePath}
        courseData={courseData}
        isCourseDataLoading={isCourseDataLoading}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
