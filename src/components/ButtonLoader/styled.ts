import styled from 'styled-components';
import { Icon } from '@mui/material';
import { ReactFragment } from 'react';

interface Props {
  buttonSpinner?: ReactFragment;
  fontSize?: string;
  component?: ReactFragment;
}

export const LoaderIcon = styled('div')({
  width: '40px !important',
  height: '40px !important',
});

export const CurrentIcon = styled(Icon)<Props>({
  width: '100% !important',
  height: '100% !important',
});
