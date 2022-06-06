import { Checkbox } from '@mui/material';

import { checkbox } from 'icons';

const CustomCheckbox = (props) => (
  <Checkbox icon={<img src={checkbox} alt="checkbox" />} {...props} />
);

export default CustomCheckbox;
