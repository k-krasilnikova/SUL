import * as React from 'react';

import { StyledLabel } from './styled';

interface ILabel {
  label: string;
}

const Label: React.FC<ILabel> = ({ label }) => (
  <StyledLabel label={label} size="small" variant="outlined" color="error" />
);

export default Label;
