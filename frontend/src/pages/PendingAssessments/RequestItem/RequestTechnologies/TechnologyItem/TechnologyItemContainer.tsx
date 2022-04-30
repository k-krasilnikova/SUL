import { FC, useState } from 'react';

import TechnologyItem from './TechnologyItem';
import { ITechnologyItemContainerProps } from './types';

const TechnologyItemContainer: FC<ITechnologyItemContainerProps> = ({ technology }) => {
  const [isFullInfoShown, setIsFullInfoShown] = useState(false);

  const showFullInfo = () => setIsFullInfoShown(true);
  const hideFullInfo = () => setIsFullInfoShown(false);

  return (
    <TechnologyItem
      technology={technology}
      isInfoShown={isFullInfoShown}
      showInfo={showFullInfo}
      hideInfo={hideFullInfo}
    />
  );
};

export default TechnologyItemContainer;
