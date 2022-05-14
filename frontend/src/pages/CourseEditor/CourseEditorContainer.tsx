/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetCourseInfo } from 'api/courses';
import { PATHS } from 'constants/routes';
import { INITIAL_VALUES } from 'constants/courseEditor';
import transformRoute from 'utils/helpers/paths/transformRoute';
import courseEditorValidationSchema from 'validations/courseEditorValidationSchema';

import CourseEditor from './CourseEditor';

const CourseEditorContainer: FC = () => {
  const params = useParams();
  const basePath = transformRoute(PATHS.courseEditor, params.courseId);
  // const { data: courseMaterials } = useGetCourseMaterials(params.courseId);

  // eslint-disable-next-line no-console
  // console.log(courseMaterials, 'courseMaterials');

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (): void => {},
    validationSchema: courseEditorValidationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const onSuccessLoadCourseData = (data: any): void => {
    formik.setValues(data, false);
  };

  const { data: courseData, isLoading: isCourseDataLoading } = useGetCourseInfo(
    params.courseId,
    onSuccessLoadCourseData,
  );

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
