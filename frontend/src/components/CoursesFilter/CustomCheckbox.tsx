import { Checkbox, FormControlLabel } from '@mui/material';

import { checkbox, checkboxChecked } from 'icons';

import { StyledFormControlLabel } from './styled';

const CustomCheckbox = (props) => (
  <StyledFormControlLabel
    label="Sort By Name"
    labelPlacement="start"
    control={
      <Checkbox
        icon={<img src={checkbox} alt="checkbox" />}
        checkedIcon={<img src={checkboxChecked} alt="checkboxChecked" />}
        {...props}
      />
    }
  />
);

export default CustomCheckbox;
