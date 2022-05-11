import { FC } from 'react';

import DefinitionStep from './DefinitionStep';
import { IDefinitionStepContainerProps } from '../types';

const DefinitionStepContainer: FC<IDefinitionStepContainerProps> = ({ courseData, formik }) => {
  //   const [courseComplexity, setCourseComplexity] = useState<number | string | undefined>(
  //     formik.initialValues.complexity,
  //   );

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setCourseComplexity(event.target.value);
  //     console.log(event.target.value);
  //   };

  return (
    <DefinitionStep
      courseData={courseData}
      formik={formik}
      //   handleChange={handleChange}
      //   courseComplexity={courseComplexity}
    />
  );
};

export default DefinitionStepContainer;
