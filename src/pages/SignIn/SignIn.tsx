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
  getFieldName,
  outOfFocusFiled,
  isLoading,
  labelHandler,
  fieldStatus,
}: SignTypes): JSX.Element => {
  const {
    values: { login, password },
    errors,
    touched,
    handleSubmit,
  } = formik;
  const { loginLabel, passwordLabel, focusedColor, basicColor } = labelHandler;

  return (
    <SignMain>
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
                    id="login"
                    item
                    xs={12}
                    color={fieldStatus === loginLabel || login ? focusedColor : basicColor}
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
                    color={fieldStatus === passwordLabel || password ? focusedColor : basicColor}
                  >
                    <TextField
                      value={password}
                      label="Password"
                      error={errors}
                      id="password"
                      warningHandler={warningHandler}
                      outOfFocusFiled={outOfFocusFiled}
                      getFieldName={getFieldName}
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
                        LOG IN
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
