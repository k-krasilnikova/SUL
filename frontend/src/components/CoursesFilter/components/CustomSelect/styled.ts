import { styled, Select, Checkbox, MenuItem } from '@mui/material';

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
      border: '1px solid #2C2525',
    },
  },
  '& .MuiSelect-select': {
    padding: '8px 14px',
    backgroundColor: '#7676801F',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #CBBEBE',
    borderWidth: '1px',
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
  margin: 0,
  fontSize: '16px',
  fontWeight: 500,
  color: '#131313',
  textTransform: 'capitalize',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
});

export const StyledMenuItem = styled(MenuItem)({
  color: '#131313',
});

export const StyledCheckbox = styled(Checkbox)({
  marginRight: '10px',
});

export const PaperProps = {
  sx: {
    marginTop: '10px',
    '& .MuiList-root': {
      padding: 0,
      maxHeight: '250px',
      maxWidth: { xs: '100%', lg: '330px' },
      overflowY: 'auto',
      '& li': {
        fontSize: { xs: '14px', md: '16px' },
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        '&.Mui-selected': {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: '#0000000A',
          },
        },
      },
    },
  },
};
