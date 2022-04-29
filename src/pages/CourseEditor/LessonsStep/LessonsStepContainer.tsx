import { FC, useState, BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router';

import LessonsStep from './LessonsStep';

interface ILessonsStepContainerProps {
  handleSubmit?: () => void;
}

const LessonsStepContainer: FC<ILessonsStepContainerProps> = ({ handleSubmit }) => {
  const [selectOption, setSelectOption] = useState('video');

  const navigate = useNavigate();

  const handleChange = (event: BaseSyntheticEvent) => {
    setSelectOption(event.target.value);
  };

  const handleBackButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    navigate(-1);
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
