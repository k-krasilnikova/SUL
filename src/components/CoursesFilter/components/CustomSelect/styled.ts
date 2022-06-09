import { styled, Select, Checkbox, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

import theme from 'themeSettings';

export const StyledSelect = styled(Select)({
  maxWidth: '330px',
  width: '100%',
  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#CBBEBE',
    },
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2C2525',
    },
  },
  '& .MuiSelect-select': {
    padding: '8px 14px',
    backgroundColor: '#7676801F',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #CBBEBE',
  },
  '& .MuiSelect-icon': {
    top: '50%',
    right: '12px',
    transform: 'rotate(45deg) translate(-50%, -50%)',
  },
  '& .MuiSelect-iconOpen': {
    transform: 'rotate(225deg) translate(0%)',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
  },
});

export const DropDownArrowIcon = styled('div')({
  padding: '4px',
  border: 'solid #131313',
  borderWidth: ' 0 1px 1px 0',
});

export const SelectLabel = styled('p')({
  margin: '0',
  fontSize: '16px',
  fontWeight: 500,
  color: '#131313',
  textTransform: 'capitalize',
});

export const StyledMenuItem = styled(MenuItem)({
  color: '#131313',
});

export const StyledCheckbox = styled(Checkbox)({
  marginRight: '10px',
});

export const useStyles = makeStyles({
  paper: {
    marginTop: '10px',
  },
  list: {
    padding: 0,
    maxHeight: '250px',
    maxWidth: '330px',
    overflowY: 'auto',
    '& li': {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      '&.Mui-selected': {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: '#0000000a',
        },
      },
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
    },
  },
});
