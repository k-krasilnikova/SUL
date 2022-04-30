import { FC } from 'react';

import { TechnologiesWrapper } from './styled';
import { IRequestTechnologiesProps } from './types';
import TechnologyItem from './TechnologyItem';

const RequestTechnologies: FC<IRequestTechnologiesProps> = ({ technologies }) => (
  <TechnologiesWrapper>
    {technologies.map((technology) => (
      <TechnologyItem technology={technology} />
    ))}
  </TechnologiesWrapper>
);

export default RequestTechnologies;
