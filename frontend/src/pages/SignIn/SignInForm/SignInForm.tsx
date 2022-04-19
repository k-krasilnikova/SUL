import React from 'react';

import { buttonSpinner } from 'animations';
import TextField from 'components/TextField';
import ButtonLoader from 'components/ButtonLoader';
import { ButtonLabels } from 'constants/ButtonLabels';
import { SIGN_IN_STYLES, SIGN_IN_TEXT } from 'constants/signIn';
import { ISignInForm } from 'types/signIn';

import Definition from './Definition';
import ErrorsMessenger from './ErrorsMessenger';
import {
  SignWrapper,
  FormBox,
  ItemsBox,
  GridWrapper,
  GridSignInput,
  GridButton,
  SignButton,
  SignFormGrid,
  DefinitionWrapper,
  GridError,
  WarningHelper,
} from './styled';

const SignInForm: React.FC<ISignInForm> = ({
  formik,
  fieldStatus,
  warningHandler,
  outOfFocusFiled,
  getFieldName,
  isAuthError,
  isLoading,
}) => {
  const {
    values: { login, password },
    errors,
    touched,
    handleSubmit,
  } = formik;
  return (
    <SignFormGrid item xs={12} sm={12} md={6} lg={5} xl={6} alignItems="center">
      <DefinitionWrapper>
        <Definition />
      </DefinitionWrapper>
      <SignWrapper>
        <FormBox>
          <ItemsBox component="form" onSubmit={handleSubmit}>
            <GridWrapper container spacing={1}>
              <GridSignInput
                id="login"
                item
                xs={12}
                color={
                  fieldStatus === SIGN_IN_STYLES.loginLabel || login
                    ? SIGN_IN_STYLES.focusedColor
                    : SIGN_IN_STYLES.basicColor
                }
              >
                <TextField
                  value={login}
                  label="Login"
                  error={errors}
                  id="login"
                  warningHandler={warningHandler}
                  outOfFocusFiled={outOfFocusFiled}
                  getFieldName={getFieldName}
                />
              </GridSignInput>
              <GridSignInput
                id="password"
                item
                xs={12}
                color={
                  fieldStatus === SIGN_IN_STYLES.passwordLabel || password
                    ? SIGN_IN_STYLES.focusedColor
                    : SIGN_IN_STYLES.basicColor
                }
              >
                <TextField
                  value={password}
                  label="Password"
                  error={errors}
                  id="password"
                  type="password"
                  warningHandler={warningHandler}
                  outOfFocusFiled={outOfFocusFiled}
                  getFieldName={getFieldName}
                />
              </GridSignInput>
              <GridError>
                <ErrorsMessenger errors={errors} touched={touched} />
                {isAuthError && <WarningHelper>{SIGN_IN_TEXT.invalid}</WarningHelper>}
              </GridError>
              <GridButton item xs={12}>
                <GridButton item xs={12}>
                  <SignButton
                    fullWidth
                    type="submit"
                    color="primary"
                    variant={isLoading ? 'mediumOutlined' : 'contained'}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <ButtonLoader buttonSpinner={buttonSpinner} />
                    ) : (
                      ButtonLabels.login
                    )}
                  </SignButton>
                </GridButton>
              </GridButton>
            </GridWrapper>
          </ItemsBox>
        </FormBox>
      </SignWrapper>
    </SignFormGrid>
  );
};

export default SignInForm;
