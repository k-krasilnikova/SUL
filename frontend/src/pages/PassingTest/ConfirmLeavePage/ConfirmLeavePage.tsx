import React from 'react';
import { Link } from 'react-router-dom';

import { ConfirmDialog } from 'components/ConfirmDialog';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';
import { close } from 'icons';
import { PATHS } from 'constants/routes';

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
  cancelLeavePage: () => void;
  courseId?: string;
  isLoading?: boolean;
  size?: string;
}

const ConfirmLeavePage: React.FC<IConfirm> = ({
  courseId,
  cancelLeavePage,
  isConfirmOpen,
  size,
  isLoading,
}) => (
  <ConfirmDialog open={isConfirmOpen} onClose={cancelLeavePage} size={size}>
    <ConfirmBox>
      <CloseButtonBox>
        <CloseButton onClick={cancelLeavePage}>
          <CloseIcon alt="close" src={close} />
        </CloseButton>
      </CloseButtonBox>
      <ConfirmMessage>Are you sure you want to leave this page?</ConfirmMessage>
      <ButtonBox>
        <ButtonCancel variant="mediumOutlined" onClick={cancelLeavePage}>
          Stay
        </ButtonCancel>
        {isLoading ? (
          <ButtonExit disabled variant="mediumOutlined">
            <ButtonLoader buttonSpinner={buttonSpinner} />
          </ButtonExit>
        ) : (
          <ButtonExit variant="mediumContained">
            <Link to={`${PATHS.myCourses}/${courseId}`}>Exit</Link>
          </ButtonExit>
        )}
      </ButtonBox>
    </ConfirmBox>
  </ConfirmDialog>
);
export default ConfirmLeavePage;
