import { FC } from 'react';

import { checkbox, checkboxChecked } from 'icons';
import { ICustomSelectProps } from 'components/CoursesFilter/types';

import {
  StyledSelect,
  PaperProps,
  SelectLabel,
  DropDownArrowIcon,
  StyledMenuItem,
  StyledCheckbox,
} from './styled';

const CustomSelect: FC<ICustomSelectProps> = ({ options, name, value, ...props }) => (
  <StyledSelect
    multiple
    displayEmpty
    name={name}
    value={value}
    renderValue={() => <SelectLabel>{name}</SelectLabel>}
    IconComponent={(componentProps) => <DropDownArrowIcon {...componentProps} />}
    MenuProps={{
      disableAutoFocusItem: true,
      PaperProps,
    }}
    {...props}
  >
    {options.map((option) => (
      <StyledMenuItem key={option} value={option}>
        <StyledCheckbox
          icon={<img src={checkbox} alt="checkbox" />}
          checkedIcon={<img src={checkboxChecked} alt="checkbox checked" />}
          checked={value.includes(`${option}`)}
        />
        {option}
      </StyledMenuItem>
    ))}
  </StyledSelect>
);

export default CustomSelect;
