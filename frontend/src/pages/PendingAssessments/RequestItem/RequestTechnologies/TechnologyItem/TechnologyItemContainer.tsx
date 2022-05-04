import { FC } from 'react';

import { ITechnologyItemContainerProps } from 'pages/PendingAssessments/types';
import { useToggle } from 'hooks';

import TechnologyItem from './TechnologyItem';

const TechnologyItemContainer: FC<ITechnologyItemContainerProps> = ({ technology }) => {
  const [isFullInfoShown, toogleFullInfoShown] = useToggle();

  return (
    <TechnologyItem
      technology={technology}
      isInfoShown={isFullInfoShown}
      toggleFullInfoShown={toogleFullInfoShown}
    />
  );
};

export default TechnologyItemContainer;
