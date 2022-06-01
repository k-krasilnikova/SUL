import { FC } from 'react';

import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';
import { IActionButtonProps } from 'pages/EmployeeProfile/types';

import { StyledButton } from './styled';

export const ActionButton: FC<IActionButtonProps> = ({
  label,
  isLoading,
  isDisabled,
  ...props
}) => (
  <StyledButton
    color="primary"
    variant={isLoading ? 'mediumOutlined' : 'mediumContained'}
    disabled={isDisabled}
    {...props}
  >
    {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : label}
  </StyledButton>
);

export default ActionButton;
