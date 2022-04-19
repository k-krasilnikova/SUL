import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';

import { TLoaderVaariants } from 'enums/loader';
import { TColorVariants } from 'types/muiTypes';

import { LoaderBox } from './styled';

interface ILoader {
  color?: TColorVariants;
  type?: TLoaderVaariants;
}

const Loader: FC<ILoader> = ({ color, type }) => {
  return (
    <LoaderBox type={type}>
      <CircularProgress color={color} />
    </LoaderBox>
  );
};

export default Loader;
