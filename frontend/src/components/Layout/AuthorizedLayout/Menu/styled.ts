import { styled, ListItemIcon } from '@mui/material';
import { makeStyles, Theme } from '@material-ui/core';

import { leftArrow } from 'icons/menuIcons';
import { IStyledProps } from 'components/Layout/types';
import theme from 'themeSettings';

const BORDER_CANCELER = '7px';

export const MenuTabs = styled('div')<IStyledProps>(({ isMobileVersion }) => ({
  position: 'relative',
  ...(!isMobileVersion && {
    height: '100%',
    backgroundColor: theme.palette.secondary.main,
    borderRight: '1px solid rgba(0, 0, 0, 0.4)',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  }),
}));

export const SqueezeButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '15px 10px',
  margin: '0 10px',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const StyledArrow = styled(leftArrow)<IStyledProps>(({ isSqueeze }) => ({
  display: 'block',
  transform: 'rotate(0deg)',
  ...(isSqueeze && {
    transform: 'rotate(180deg)',
  }),
}));

export const MenuTabsWrapper = styled('div')<IStyledProps>(({ isMobileVersion }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    ...(!isMobileVersion && { display: 'none' }),
  },
}));

export const ItemText = styled('p')<IStyledProps>(({ isSqueeze, isMobileVersion }) => ({
  width: '100%',
  margin: 0,
  marginLeft: '14px',
  fontSize: '18px',
  overflow: 'hidden',
  ...(isSqueeze && { width: 0, marginLeft: 0 }),
  ...(isMobileVersion && {
    marginLeft: '10px',
    textOverflow: 'ellipsis',
  }),
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)<IStyledProps>(({ isMobileVersion }) => ({
  ...(isMobileVersion
    ? { minWidth: '25px', '& svg': { width: '25px', height: '25px' } }
    : { minWidth: '35px', '& svg': { width: '35px', height: '35px' } }),
}));

export const useListStyles = makeStyles<Theme, IStyledProps>({
  default: ({ isMobileVersion }) => ({
    display: 'flex',
    alignItems: 'center',
    ...(isMobileVersion
      ? { minHeight: '50px', padding: '0 18px 0 12px' }
      : { minHeight: '56px', padding: '8px 35px 8px 25px' }),
    '& p': {
      fontWeight: 400,
    },
  }),
  active: ({ isMobileVersion }) => ({
    ...(!isMobileVersion && {
      width: `calc(100% + ${BORDER_CANCELER})`,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: '-10px 0 15px 4px rgba(0, 0, 0, 0.1)',
    }),
    '& p': {
      fontWeight: 500,
    },
    '& div svg': {
      color: theme.palette.primary.main,
    },
  }),
  inactive: {
    '&:hover': {
      background: '#0000000a',
    },
  },
});
