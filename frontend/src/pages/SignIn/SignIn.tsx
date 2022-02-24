import React from 'react';

import { TextField } from 'components/TextField';
import { Image } from 'components/Image';
import { SignTypes } from 'types/signIn';
import { signInImage } from 'images';
import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';

import Definition from './Definition';
import ErrorsMessenger from './ErrorsMessager';
import {
  SignWrapper,
  FormBox,
  ItemsBox,
  GridWrapper,
  GridSignInput,
  GridButton,
  SignButton,
  SignMain,
  SignMainGrid,
  SignPresGrid,
  SignFormGrid,
  DefinitionWrapper,
  ImageWrapper,
  GridError,
} from './styled';

const SignIn = ({
  formik,
  warningHandler,
  isLoading,
  classes,
  labelHandler,
  getFieldName,
  getCoordinates,
  labelStatus,
}: SignTypes): JSX.Element => {
  const {
    values: { login, password },
    errors,
    handleSubmit,
    handleBlur,
    touched,
  } = formik;
  const { loginLabel, passwordLabel } = labelHandler;

  return (
    <SignMain onClick={(event) => getCoordinates(event)}>
      <SignMainGrid justifyContent="space-between" container spacing={{ xl: 2, lg: 2 }}>
        <SignPresGrid item xs={12} sm={12} md={6} lg={7} xl={6}>
          <ImageWrapper>
            <Image imageUrl={signInImage} />
          </ImageWrapper>
        </SignPresGrid>
        <SignFormGrid item xs={12} sm={12} md={6} lg={5} xl={6} alignItems="center">
          <DefinitionWrapper>
            <Definition />
          </DefinitionWrapper>
          <SignWrapper>
            <FormBox>
              <ItemsBox component="form" onSubmit={handleSubmit}>
                <GridWrapper container spacing={1}>
                  <GridSignInput
                    onClick={(event) => getFieldName(event)}
                    id="login"
                    item
                    xs={12}
                    classes={
                      labelStatus === loginLabel || login
                        ? { root: classes.explicitLabel }
                        : { root: classes.basicLabel }
                    }
                  >
                    <TextField
                      value={login}
                      label="Login"
                      warningHandler={warningHandler}
                      handleBlur={handleBlur}
                      error={errors}
                      id="login"
                    />
                  </GridSignInput>
                  <GridSignInput
                    onClick={(event) => getFieldName(event)}
                    id="password"
                    item
                    xs={12}
                    classes={
                      labelStatus === passwordLabel || password
                        ? { root: classes.explicitLabel }
                        : { root: classes.basicLabel }
                    }
                  >
                    <TextField
                      value={password}
                      label="Password"
                      warningHandler={warningHandler}
                      handleBlur={handleBlur}
                      error={errors}
                      id="password"
                      type="password"
                    />
                  </GridSignInput>
                  <GridError>
                    <ErrorsMessenger error={errors} touched={touched} />
                  </GridError>
                  <GridButton item xs={12}>
                    {isLoading ? (
                      <SignButton fullWidth type="submit" variant="mediumOutlined" disabled>
                        <ButtonLoader buttonSpinner={buttonSpinner} />
                      </SignButton>
                    ) : (
                      <SignButton fullWidth type="submit" variant="contained" color="primary">
                        LOG INsdsd
                      </SignButton>
                    )}
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
