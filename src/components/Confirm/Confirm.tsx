import React from 'react';

import {
  // ComfirmWrapper,
  ComfirmBox,
  ButtonBox,
  ComfirmMessage,
  ButtonCancel,
  ButtonExit,
} from './styled';

interface IConfirm {
  showConfirm: boolean;
  handleLogOut: () => void;
  cancelLogOut: () => void;
}

const Confirm: React.FC<IConfirm> = ({ handleLogOut, cancelLogOut, showConfirm }) => (
  <ComfirmBox open={showConfirm} onClose={cancelLogOut}>
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
);

export default Confirm;
