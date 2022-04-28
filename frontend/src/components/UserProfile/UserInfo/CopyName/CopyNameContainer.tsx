import { FC, BaseSyntheticEvent } from 'react';
import { useSnackbar } from 'notistack';

import { COPIED } from 'constants/messages';
import { successSnackbar } from 'constants/snackbarVariant';
import { ICopyNameContainerProps } from 'components/UserProfile/types';

import CopyName from './CopyName';

const CopyNameContainer: FC<ICopyNameContainerProps> = ({ userName }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopyClick = (event: BaseSyntheticEvent) => {
    const COPY_ICON_DATASET = 'ContentCopyIcon';
    const isCopyIcon =
      event.target?.dataset?.testid === COPY_ICON_DATASET ||
      event.target?.parentNode?.dataset?.testid === COPY_ICON_DATASET;

    if (isCopyIcon) {
      event.stopPropagation();
      enqueueSnackbar(COPIED, successSnackbar);
    }
  };

  return <CopyName userName={userName} handleCopyClick={handleCopyClick} />;
};

export default CopyNameContainer;
