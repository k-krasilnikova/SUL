import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { TLoaderVaariants } from 'enums/loader';
import { TColorVariants } from 'types/muiTypes';

import { LoaderBox } from './styled';

interface ILoader {
  color?: TColorVariants;
  type?: TLoaderVaariants;
}

const Loader: React.FC<ILoader> = ({ color, type }) => {
  return (
    <LoaderBox type={type}>
      <CircularProgress color={color} />
    </LoaderBox>
  );
};

export default Loader;
