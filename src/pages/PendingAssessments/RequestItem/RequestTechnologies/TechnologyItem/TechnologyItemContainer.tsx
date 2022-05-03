import { FC, useState } from 'react';

import { ITechnologyItemContainerProps } from 'pages/PendingAssessments/types';

import TechnologyItem from './TechnologyItem';

const TechnologyItemContainer: FC<ITechnologyItemContainerProps> = ({ technology }) => {
  const [isFullInfoShown, setFullInfoShown] = useState(false);

  const showFullInfo = () => setFullInfoShown(true);
  const hideFullInfo = () => setFullInfoShown(false);

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
