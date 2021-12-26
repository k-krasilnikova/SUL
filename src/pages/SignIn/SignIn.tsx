import * as React from 'react';

import {
  Button,
  SignInFormik,
  input_login,
  label_login,
  autoComplete_login,
  input_password,
  label_password,
  autoComplete_password,
  authLabel,
} from './SignReceiver';
import { SignPresenter, SignLabel, InputField } from 'components/SignForms';
import {
  SignWrapper,
  FormBox,
  ItemsBox,
  GridWrapper,
  GridSignInput,
  GridButton,
  SignMain,
  SignMainGrid,
  SignPresGrid,
  SignFormGrid,
} from './styled';

const SignIn = ({ formik, onChangeHandler }: SignInFormik): JSX.Element => {
  const {
    values: { login, password },
    errors,
    touched,
    isValid,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <SignMain>
      <SignMainGrid justifyContent="space-between" container>
        <SignPresGrid item xs={12} sm={12} md={7} lg={8} alignItems="center">
          <SignPresenter />
        </SignPresGrid>
        <SignFormGrid item xs={12} sm={12} md={5} lg={4} alignItems="center">
          <SignWrapper>
            <FormBox>
              <SignLabel signLabel={authLabel} />
              <ItemsBox component="form" onSubmit={handleSubmit}>
                <GridWrapper container spacing={1}>
                  <GridSignInput item xs={12}>
                    <InputField
                      fieldValue={login}
                      touched={touched?.login}
                      onChangeHandler={onChangeHandler}
                      handleBlur={handleBlur}
                      errors={errors?.login}
                      id={input_login}
                      label={label_login}
                      autoComplete={autoComplete_login}
                    />
                  </GridSignInput>
                  <GridSignInput item xs={12}>
                    <InputField
                      fieldValue={password}
                      touched={touched?.password}
                      onChangeHandler={onChangeHandler}
                      handleBlur={handleBlur}
                      errors={errors?.password}
                      id={input_password}
                      label={label_password}
                      autoComplete={autoComplete_password}
                    />
                  </GridSignInput>
                  <GridButton item xs={12}>
                    <Button
                      fullWidth
                      disabled={!isValid}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Sign In
                    </Button>
                  </GridButton>
                </GridWrapper>
              </ItemsBox>
            </FormBox>
          </SignWrapper>
        </SignFormGrid>
      </SignMainGrid>
    </SignMain>
  );
};

export default SignIn;
