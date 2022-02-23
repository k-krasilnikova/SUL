import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';
import useGetAuth from 'api/auth/getAuth';

import { useExplitLabel } from './styled';
import SignIn from './SignIn';

interface SignInFields {
  login: string;
  password: string;
}

const initSignInvalue: SignInFields = {
  login: '',
  password: '',
};

const SignInContainer: React.FC = () => {
  const { mutateAsync, isLoading, status } = useGetAuth();
  // const [labelState, setLabelState] = useState<string | undefined>();
  const FIELD_TOUCHED = true;
  const FIELD_VALIDATE = false;

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values): void => {
      mutateAsync(values);
    },
  });

  const warningHandler = (name: string, e: string) => {
    formik.handleChange(e);
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
  };

  // const handleFocus = (e: React.FocusEvent) => {
  //   const targetId = e.target.id;
  //   setLabelState(targetId);
  // };
  const classes = useExplitLabel();

  const LABEL_HANDLER = {
    loginLabel: 'login',
    emptyLogin: 'Login is required',
    passwordLabel: 'password',
    emptyPassword: 'Enter your password',
  };

  return (
    <FormikProvider value={formik}>
      <SignIn
        formik={formik}
        warningHandler={warningHandler}
        isLoading={isLoading}
        // handleFocus={handleFocus}
        // labelState={labelState}
        classes={classes}
        status={status}
        labelHandler={LABEL_HANDLER}
      />
    </FormikProvider>
  );
};

export default SignInContainer;
