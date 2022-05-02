import { FC, useState } from 'react';

import DefinitionStep from './DefinitionStep';
import { IDefinitionStepContainerProps } from '../types';

const DefinitionStepContainer: FC<IDefinitionStepContainerProps> = ({ courseData }) => {
  const [courseComplexity, setCourseComplexity] = useState<number | string | undefined>(
    courseData?.complexity,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourseComplexity(event.target.value);
  };

  return (
    <DefinitionStep
      handleChange={handleChange}
      courseComplexity={courseComplexity}
      courseData={courseData}
    />
  );
};

export default DefinitionStepContainer;
