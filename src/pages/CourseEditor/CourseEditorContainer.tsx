import { FC } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetCourseInfo } from 'api/courses';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';
import courseEditorValidationSchema from 'validations/courseEditorValidationSchema';

import CourseEditor from './CourseEditor';

const CourseEditorContainer: FC = () => {
  const params = useParams();
  const basePath = transformRoute(PATHS.courseEditor, params.courseId);

  const { data: courseData, isLoading: isCourseDataLoading } = useGetCourseInfo(params.courseId);

  const INITIAL_VALUES = {
    title: courseData?.title,
    complexity: courseData?.complexity,
    avatar: courseData?.avatar,
    description: courseData?.description,
    technologies: courseData?.technologies,
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <FormikProvider value={formik}>
      <CourseEditor
        basePath={basePath}
        courseData={courseData}
        isCourseDataLoading={isCourseDataLoading}
        formik={formik}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
