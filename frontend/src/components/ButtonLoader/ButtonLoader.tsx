import * as React from 'react';

import { Image } from 'components/Image';
import { Typography } from '@mui/material';
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
