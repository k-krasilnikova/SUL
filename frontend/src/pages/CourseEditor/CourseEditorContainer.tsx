/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { useGetCourseEditorData } from 'api/admin';
import { INITIAL_VALUES } from 'constants/courseEditor';
import courseEditorValidationSchema from 'validations/courseEditorValidationSchema';

import CourseEditor from './CourseEditor';

const CourseEditorContainer: FC = () => {
  const params = useParams();
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

  const { data: courseEditorData, isLoading: isCourseEditorDataLoading } = useGetCourseEditorData(
    params.courseId,
    onSuccessLoadCourseData,
  );

  return (
    <FormikProvider value={formik}>
      <CourseEditor
        courseData={courseEditorData}
        isCourseDataLoading={isCourseEditorDataLoading}
        formik={formik}
      />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
