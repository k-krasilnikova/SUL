import styled from 'styled-components';
import { FormControlLabel, ListItem } from '@mui/material';

import theme from 'themeSettings';

export const StyledItem = styled(ListItem)({
  '&.MuiListItem-root': {
    padding: '0',
    '&:not(:last-child)': {
      marginBottom: '12px',
    },
  },
});

export const StyledLabel = styled(FormControlLabel)({
  width: '350px',
  backgroundColor: '#F5F5F5',
  border: '1px solid #EFEFEF',
  borderRadius: '6px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  '&.MuiFormControlLabel-root': {
    margin: '0',
  },
  '& .MuiFormControlLabel-label': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});
