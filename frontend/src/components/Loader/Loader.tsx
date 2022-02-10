import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LoaderBox } from './styled';

interface ILoader {
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit' | undefined;
  type?: string;
}

const Loader: React.FC<ILoader> = ({ color, type }) => {
  return (
    <LoaderBox type={type}>
      <CircularProgress color={color} />
    </LoaderBox>
  );
};

export default Loader;
