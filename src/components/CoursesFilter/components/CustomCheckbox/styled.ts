import { styled, Checkbox, FormControlLabel } from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)({
  margin: 0,
  '& .MuiTypography-root': {
    marginRight: '12px',
    fontSize: '16px',
    fontWeight: 500,
    color: '#131313',
  },
});

export const StyledCheckbox = styled(Checkbox)({
  width: '40px',
  height: '40px',
  padding: 0,
  backgroundColor: '#7676801F',
  borderRadius: '4px',
  border: '2px solid #CBBEBE',
  '&.Mui-checked': {
    borderColor: '#2C2525',
  },
});
