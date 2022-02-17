import React from 'react';

import { ConfirmDialog } from 'components/ConfirmDialog';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';
import { close } from 'icons';

import {
  ConfirmBox,
  ButtonBox,
  ConfirmMessage,
  ButtonCancel,
  ButtonExit,
  CloseButtonBox,
  CloseButton,
  CloseIcon,
} from './styled';

interface IConfirm {
  isConfirmOpen: boolean;
  handleLogOut: () => void;
  cancelLogOut: () => void;
  isLoading?: boolean;
  size?: string;
}

const ConfirmLogOut: React.FC<IConfirm> = ({
  handleLogOut,
  cancelLogOut,
  isConfirmOpen,
  size,
  isLoading,
}) => (
  <ConfirmDialog open={isConfirmOpen} onClose={cancelLogOut} size={size}>
    <ConfirmBox>
      <CloseButtonBox>
        <CloseButton onClick={cancelLogOut}>
          <CloseIcon alt="close" src={close} />
        </CloseButton>
      </CloseButtonBox>
      <ConfirmMessage>Log out of this account?</ConfirmMessage>
      <ButtonBox>
        <ButtonCancel variant="mediumOutlined" onClick={cancelLogOut}>
          Cancel
        </ButtonCancel>
        {isLoading ? (
          <ButtonExit disabled variant="mediumOutlined">
            <ButtonLoader buttonSpinner={buttonSpinner} />
          </ButtonExit>
        ) : (
          <ButtonExit onClick={handleLogOut} variant="mediumContained">
            Exit
          </ButtonExit>
        )}
      </ButtonBox>
    </ConfirmBox>
  </ConfirmDialog>
);
export default ConfirmLogOut;