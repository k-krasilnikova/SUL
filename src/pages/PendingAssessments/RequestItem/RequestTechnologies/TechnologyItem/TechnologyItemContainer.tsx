import { FC, useState } from 'react';

import { ITechnologyItemContainerProps } from 'pages/PendingAssessments/types';

import TechnologyItem from './TechnologyItem';

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
