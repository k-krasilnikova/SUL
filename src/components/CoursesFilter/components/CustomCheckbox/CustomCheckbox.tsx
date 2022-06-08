import { FC } from 'react';

import { sort, checkedSort } from 'icons';

import { StyledCheckbox } from './styled';

const CustomCheckbox: FC = (props) => (
  <StyledCheckbox
    disableRipple
    icon={<img src={sort} alt="sort checkbox" />}
    checkedIcon={<img src={checkedSort} alt="checked sort checkbox" />}
    {...props}
  />
);

export default CustomCheckbox;
