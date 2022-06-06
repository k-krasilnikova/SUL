import { Select, MenuItem } from '@mui/material';

const CustomSelect = ({ options, name, ...props }) => (
  <Select multiple displayEmpty renderValue={() => <em>{name}</em>} name={name} {...props}>
    {options.map((option) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </Select>
);

export default CustomSelect;
