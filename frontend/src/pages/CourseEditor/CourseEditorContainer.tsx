import { useFormik, FormikProvider } from 'formik';
import { useParams } from 'react-router';

import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import CourseEditor from './CourseEditor';

const CourseEditorContainer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      videoUrl: '',
      textDescription: '',
      exerciseTitle: '',
      exerciseDescription: '',
    },
    enableReinitialize: true,
    onSubmit: (): void => {},
  });

  const params = useParams();
  const basePath = transformRoute(PATHS.courseEditor, params.courseId);

  // eslint-disable-next-line no-console
  console.log(formik, 'FORMIK');

  return (
    <FormikProvider value={formik}>
      <CourseEditor basePath={basePath} formValues={formik.values} />
    </FormikProvider>
  );
};

export default CourseEditorContainer;
