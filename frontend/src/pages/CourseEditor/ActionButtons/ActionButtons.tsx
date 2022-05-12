import { FC } from 'react';

import { ButtonLabels } from 'constants/ButtonLabels';

import { StyledButton, ButtonWrapper } from './styled';

const ActionButtons: FC = () => (
  <ButtonWrapper>
    <StyledButton variant="mediumOutlined">{ButtonLabels.previous}</StyledButton>
    <StyledButton variant="mediumContained">{ButtonLabels.next}</StyledButton>
  </ButtonWrapper>
);

export default ActionButtons;
