import React from 'react';

import {
  ComfirmWrapper,
  ComfirmBox,
  ButtonBox,
  ComfirmMessage,
  ButtonCancel,
  ButtonExit,
} from './styled';

interface IConfirm {
  handleLogOut?: () => void;
  cancelLogOut?: () => void;
}

const Confirm: React.FC<IConfirm> = ({ handleLogOut, cancelLogOut }) => (
  <ComfirmWrapper>
    <ComfirmBox>
      <ComfirmMessage>Log out of this account?</ComfirmMessage>
      <ButtonBox>
        <ButtonCancel variant="mediumContained" onClick={cancelLogOut}>
          Cancel
        </ButtonCancel>
        <ButtonExit variant="mediumContained" onClick={handleLogOut}>
          Exit
        </ButtonExit>
      </ButtonBox>
    </ComfirmBox>
  </ComfirmWrapper>
);

export default Confirm;
