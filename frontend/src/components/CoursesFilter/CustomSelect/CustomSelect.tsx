import { checkbox, checkboxChecked } from 'icons';

import {
  useStyles,
  StyledSelect,
  SelectLabel,
  DropDownArrowIcon,
  StyledMenuItem,
  StyledCheckbox,
} from './styled';

const CustomSelect = ({ options, name, value, ...props }) => {
  const { paper, list } = useStyles();

  return (
    <StyledSelect
      multiple
      displayEmpty
      name={name}
      value={value}
      renderValue={() => <SelectLabel>{name}</SelectLabel>}
      IconComponent={(props) => <DropDownArrowIcon {...props} />}
      MenuProps={{ classes: { paper, list } }}
      {...props}
    >
      {options.map((option) => (
        <StyledMenuItem key={option} value={option}>
          <StyledCheckbox
            icon={<img src={checkbox} alt="checkbox" />}
            checkedIcon={<img src={checkboxChecked} alt="checkboxChecked" />}
            checked={value.includes(`${option}`)}
          />
          {option}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;
