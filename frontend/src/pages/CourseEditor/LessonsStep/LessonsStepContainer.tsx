import { FC, ChangeEvent, useState } from 'react';

import LessonsStep from './LessonsStep';

interface ILessonsStepContainerProps {
  handleBackButtonClick?: () => void;
  handleSubmit?: () => void;
}

const LessonsStepContainer: FC<ILessonsStepContainerProps> = ({
  handleBackButtonClick,
  handleSubmit,
}) => {
  const [selectOption, setSelectOption] = useState('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
  };

  return (
    <LessonsStep
      handleBackButtonClick={handleBackButtonClick}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      selectOption={selectOption}
    />
  );
};

export default LessonsStepContainer;
