/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { Image } from 'components/Image';
import { SignTypes } from 'types/signIn';
import { signInImage } from 'images';
import ButtonLoader from 'components/ButtonLoader';

import { Typography, Box } from '@mui/material';
import { keyframes } from '@mui/system';
import Definition from './Definition';
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
  RotatedBox,
} from './styled';

const SignIn = ({ formik, warningHandler, isLoading, status }: SignTypes): JSX.Element => {
  const {
    values: { login, password },
    errors,
    isValid,
    handleSubmit,
    handleBlur,
  } = formik;

  const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
                    {isLoading && status === 'loading' ? (
                      <SignButton fullWidth disabled type="submit" variant="outlined">
                        <RotatedBox />
                      </SignButton>
                    ) : (
                      <SignButton
                        fullWidth
                        disabled={!isValid}
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Log In
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
