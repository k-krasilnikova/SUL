import React from 'react';
import { Typography } from '@mui/material';

import { Image } from 'components/Image';

import { LoaderIcon } from './styled';

interface Props {
  buttonSpinner?: string;
}

const ButtonLoader: React.FC<Props> = ({ buttonSpinner }) =>
  buttonSpinner ? (
    <LoaderIcon>
      <Image imageUrl={buttonSpinner} />
    </LoaderIcon>
  ) : (
    <Typography variant="body2">Loading...</Typography>
  );

export default ButtonLoader;
