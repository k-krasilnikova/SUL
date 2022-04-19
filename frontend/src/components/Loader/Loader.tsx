import { CircularProgress } from '@mui/material';
import { FC } from 'react';

import { TLoaderVariants } from 'enums/loader';
import { TColorVariants } from 'types/muiTypes';

import { LoaderBox } from './styled';

interface ILoader {
  color?: TColorVariants;
  type?: TLoaderVariants;
}

const Loader: FC<ILoader> = ({ color, type }) => (
  <LoaderBox type={type}>
    <CircularProgress color={color} />
  </LoaderBox>
);

export default Loader;
