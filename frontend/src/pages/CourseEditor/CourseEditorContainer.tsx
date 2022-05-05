import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import CourseEditor from './CourseEditor';

const CourseEditorContainer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      videoURL: '',
      textDescription: '',
      exerciseTitle: '',
      exerciseDescription: '',
    },
    enableReinitialize: true,
    onSubmit: (): void => {},
  });

  const params = useParams();
  const basePath = transformRoute(PATHS.courseEditor, params.courseId);

  return (
    <FormikProvider value={formik}>
      <CourseEditor basePath={basePath} formik={formik} />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
