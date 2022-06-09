import { FC } from 'react';

import { sort } from 'icons';

import { StyledFormControlLabel, StyledCheckbox } from './styled';

const CustomCheckbox: FC = (props) => (
  <StyledFormControlLabel
    label="Sort By Name"
    labelPlacement="start"
    control={
      <StyledCheckbox
        disableRipple
        icon={<img src={sort} alt="sort checkbox" />}
        checkedIcon={<img src={sort} alt="sort checkbox" />}
      />
    }
    {...props}
  />
);

export default CustomCheckbox;
