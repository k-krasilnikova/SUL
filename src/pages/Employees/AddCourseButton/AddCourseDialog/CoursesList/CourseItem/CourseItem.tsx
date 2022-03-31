import { FC, BaseSyntheticEvent } from 'react';
import { Checkbox } from '@mui/material';

import { checkbox, checkboxChecked } from 'icons';

import { StyledItem, StyledLabel } from './styled';

interface IProps {
  checkboxValue: string;
  isChecked: boolean;
  title: string;
  courseRef?: (node?: Element | null) => void;
  handleCheckboxChange: (event: BaseSyntheticEvent) => void;
}

const CourseItem: FC<IProps> = ({
  checkboxValue,
  isChecked,
  title,
  courseRef,
  handleCheckboxChange,
}) => (
  <StyledItem ref={courseRef}>
    <StyledLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          icon={<img src={checkbox} alt="checkbox" />}
          checkedIcon={<img src={checkboxChecked} alt="checkboxChecked" />}
          value={checkboxValue}
        />
      }
      label={title}
    />
  </StyledItem>
);

export default CourseItem;
