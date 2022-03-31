import { FC } from 'react';

import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';
import { ButtonLabels } from 'components/Button/ButtonsEnums';

import { StyledButton } from './styled';

interface IProps {
  isDisabled: boolean;
  isLoading: boolean;
  handleClick: () => void;
}

const ActionButton: FC<IProps> = ({ isDisabled, isLoading, handleClick }) => (
  <StyledButton variant="mediumContained" disabled={isDisabled} onClick={handleClick}>
    {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.add}
  </StyledButton>
);

export default ActionButton;
