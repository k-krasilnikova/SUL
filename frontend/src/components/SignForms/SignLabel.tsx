/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { SignLabelTypes } from './SignInterfaces';
import { Typography } from '@mui/material';

const SignLabel = ({ signLabel }: SignLabelTypes): JSX.Element => (
  <Typography variant="h5" mb={3}>
    {signLabel}
  </Typography>
);

export default SignLabel;
