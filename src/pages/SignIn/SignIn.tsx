import React from 'react';
import { Typography } from '@mui/material';

import Button from 'components/Button';
import TextField from 'components/TextField';
import { SignTypes } from 'types/signIn';

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
} from './styled';

const SignIn = ({ formik }: SignTypes): JSX.Element => {
  const {
    values: { login, password },
    errors,
    touched,
    isValid,
    handleSubmit,
    handleChange,
  } = formik;

  return (
    <SignMain>
      <SignMainGrid justifyContent="space-between" container>
        <SignPresGrid item xs={12} sm={12} md={7} lg={8} alignItems="center">
          <Definition />
        </SignPresGrid>
        <SignFormGrid item xs={12} sm={12} md={5} lg={4} alignItems="center">
          <SignWrapper>
            <FormBox>
              <Typography variant="h5" mb={3}>
                Log In
              </Typography>
              <ItemsBox component="form" onSubmit={handleSubmit}>
                <GridWrapper container spacing={1}>
                  <GridSignInput item xs={12}>
                    <TextField
                      value={login}
                      touched={touched?.login}
                      onChange={handleChange}
                      error={errors?.login}
                      id="login"
                      label="Login"
                    />
                  </GridSignInput>
                  <GridSignInput item xs={12}>
                    <TextField
                      value={password}
                      touched={touched?.password}
                      onChange={handleChange}
                      error={errors?.password}
                      id="password"
                      label="Password"
                      type="password"
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
