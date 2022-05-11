import { styled, ListItemIcon } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import { rightArrow } from 'icons/menuIcons';
import theme from 'themeSettings';

const BORDER_CANCELER = 7;

export const MenuTabs = styled('div')({
  position: 'relative',
  height: '100%',
  backgroundColor: theme.palette.secondary.main,
  borderRight: '1px solid rgba(0, 0, 0, 0.39)',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
});

export const SqueezeButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '15px 10px',
  margin: '0 10px',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const StyledArrow = styled(rightArrow)<{ isSqueeze: boolean }>(({ isSqueeze }) => ({
  display: 'block',
  transform: 'rotate(0deg)',
  ...(isSqueeze && {
    transform: 'rotate(180deg)',
  }),
}));

export const MenuTabsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

export const ItemText = styled('p')<{ isSqueeze: boolean }>(({ isSqueeze }) => ({
  width: '100%',
  margin: 0,
  fontSize: '18px',
  ...(isSqueeze && { width: 0, overflow: 'hidden' }),
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)({
  flexGrow: '1',
  minWidth: '50px',
});

export const useListStyles = makeStyles({
  default: {
    display: 'flex',
    alignItems: 'center',
    height: '56px',
    padding: '8px 26px 8px 20px',
    '& p': {
      fontWeight: 400,
    },
    '& div svg': {
      width: '35px',
      height: '35px',
    },
  },
  active: {
    width: `calc(100% + ${BORDER_CANCELER}px)`,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '-10px 0px 15px 4px rgba(0, 0, 0, 0.1)',
    '& p': {
      fontWeight: 500,
    },
    '& div svg': {
      color: theme.palette.primary.main,
    },
  },
  inactive: {
    '&:hover': {
      background: '#0000000a',
    },
  },
});
