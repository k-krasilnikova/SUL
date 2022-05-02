import { FC } from 'react';

import { IRequestTechnologiesProps } from 'pages/PendingAssessments/types';

import { TechnologiesWrapper } from './styled';
import TechnologyItem from './TechnologyItem';

const RequestTechnologies: FC<IRequestTechnologiesProps> = ({ technologies }) => (
  <TechnologiesWrapper>
    {technologies.map((technology) => (
      <TechnologyItem technology={technology} />
    ))}
  </TechnologiesWrapper>
);

export default RequestTechnologies;
