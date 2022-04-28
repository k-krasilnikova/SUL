import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ICopyNameProps } from 'components/UserProfile/types';

import { CopyWrapper, CopyIcon } from './styled';

const CopyName: FC<ICopyNameProps> = ({ userName, handleCopyClick }) => (
  <CopyWrapper onClick={handleCopyClick}>
    <CopyToClipboard text={userName}>
      <CopyIcon color="disabled" />
    </CopyToClipboard>
  </CopyWrapper>
);

export default CopyName;
