import React from 'react';

import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { Image } from 'components/Image';
import { SignTypes } from 'types/signIn';
import { signInImage } from 'images';

import Definition from './Definition';
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
  DefinitionWrapper,
  ImageWrapper,
} from './styled';

const SignIn = ({ formik, warningHandler }: SignTypes): JSX.Element => {
  const {
    values: { login, password },
    errors,
    isValid,
    handleSubmit,
    handleBlur,
  } = formik;

  return (
    <SignMain>
      <SignMainGrid justifyContent="space-between" container spacing={{ xl: 2, lg: 2 }}>
        <SignPresGrid item xs={12} sm={12} md={6} lg={7} xl={6} alignItems="center">
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
                  <GridSignInput item xs={12}>
                    <TextField
                      value={login}
                      warningHandler={warningHandler}
                      handleBlur={handleBlur}
                      error={errors}
                      placeholder="Login"
                      id="login"
                    />
                  </GridSignInput>
                  <GridSignInput item xs={12}>
                    <TextField
                      value={password}
                      warningHandler={warningHandler}
                      handleBlur={handleBlur}
                      error={errors}
                      id="password"
                      type="password"
                      placeholder="Password"
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
                      Log In
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