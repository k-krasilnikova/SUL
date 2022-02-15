import React, { ReactFragment } from 'react';
import { Typography } from '@mui/material';

import { LoaderIcon, CurrentIcon } from './styled';

interface Props {
  buttonSpinner?: ReactFragment;
}

const ButtonLoader: React.FC<Props> = ({ buttonSpinner }) =>
  buttonSpinner ? (
    <LoaderIcon>
      <CurrentIcon fontSize="large" component={buttonSpinner} />
    </LoaderIcon>
  ) : (
    <Typography variant="body2">Loading...</Typography>
  );

export default ButtonLoader;
