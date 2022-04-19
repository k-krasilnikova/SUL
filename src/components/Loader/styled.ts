import { styled, Box } from '@mui/material';

import theme from 'themeSettings';
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_IPAD,
  HEADER_HEIGHT_MOBILE,
} from 'components/Layout/Header/styled';
import { Loaders, TLoaderVaariants } from 'enums/loader';

interface LoaderType {
  type?: TLoaderVaariants;
}

export const LoaderBox = styled(Box)<LoaderType>(({ type }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  ...(type === Loaders.page && {
    height: '100vh',
    width: '100vw',
  }),
  ...(type === Loaders.content && {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
    },
    [theme.breakpoints.up('md')]: {
      height: `calc(100vh - ${HEADER_HEIGHT_IPAD})`,
    },
    [theme.breakpoints.up('xl')]: {
      height: `calc(100vh - ${HEADER_HEIGHT})`,
    },
  }),
  ...(type === Loaders.component && {
    height: '100%',
    width: '100%',
  }),
}));
