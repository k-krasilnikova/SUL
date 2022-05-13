import { FC } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useParams } from 'react-router';

import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import { useGetCourseMaterials } from 'api/courses';
import CourseEditor from './CourseEditor';

// TODO change initialValues in courseData?.materials for all lessons (?)

const CourseEditorContainer: FC = () => {
  const params = useParams();
  const basePath = transformRoute(PATHS.courseEditor, params.courseId);
  const { data: courseMaterials } = useGetCourseMaterials(params.courseId);
  // eslint-disable-next-line no-console
  console.log(courseMaterials, 'courseMaterials');

  const INITIAL_VALUES = {
    videoURL: '',
    textDescription: '',
    exerciseTitle: '',
    exerciseDescription: '',
    testTitle: '',
    testDuration: '',
    testQuestion: '',
    testAnswer: '',
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    enableReinitialize: true,
    onSubmit: (): void => {},
  });

  return (
    <FormikProvider value={formik}>
      <CourseEditor basePath={basePath} formik={formik} />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
