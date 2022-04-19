import { styled, Dialog as MuiDialog } from '@mui/material';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  size?: string;
}

export const StyledDialog = styled(MuiDialog)<Size>(({ size }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '660px',
    borderRadius: '5px',
    boxShadow: 'none',
    [theme.breakpoints.up('xs')]: {
      ...(size === SIZE.small && {
        width: '240px',
        minHeight: '215px',
      }),
      ...(size === SIZE.medium && {
        width: '256px',
      }),
      ...(size === SIZE.large && {
        width: '288px',
        minHeight: '436px',
      }),
    },
    [theme.breakpoints.up('md')]: {
      ...(size === SIZE.small && {
        width: '378px',
      }),
      ...(size === SIZE.medium && {
        width: '660px',
      }),
      ...(size === SIZE.large && {
        width: '575px',
      }),
    },
    [theme.breakpoints.up('xl')]: {
      ...(size === SIZE.small && {
        width: '520px',
        minHeight: '260px',
      }),
      ...(size === SIZE.large && {
        width: '660px',
      }),
    },
  },
}));

export const DialogCloseButton = styled('div')({
  width: '12px',
  height: '12px',
  margin: '8px 8px 8px auto',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const CloseIcon = styled('img')({
  width: '12px',
  height: '12px',
  color: theme.palette.primary.main,
});

export const DialogBodyWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  padding: '8px',
  textAlign: 'center',
  '& .MuiDialogContentText-root': {
    color: '#131313',
    fontWeight: 500,
  },
  '& .MuiDialogActions-root': {
    display: 'flex',
    justifyContent: 'center',
    margin: '16px auto',
    padding: 0,
    [theme.breakpoints.up('xs')]: {
      marginTop: '8px',
      height: '32px',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '24px',
      height: '50px',
    },
  },
  '& .MuiButton-root': {
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '64px',
      fontSize: '12px',
      padding: '8px 21px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '100px',
      fontSize: '18px',
      padding: '14px 23px',
    },
  },
});
