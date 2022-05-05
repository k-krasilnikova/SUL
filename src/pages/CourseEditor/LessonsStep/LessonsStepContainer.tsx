import { FC, useState, BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router';

import LessonsStep from './LessonsStep';

interface ILessonsStepContainerProps {
  formik: unknown;
}

const LessonsStepContainer: FC<ILessonsStepContainerProps> = ({ formik }) => {
  const [selectOption, setSelectOption] = useState('video');

  const navigate = useNavigate();

  const handleBackButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  const handleChangeOption = (event: BaseSyntheticEvent) => {
    setSelectOption(event.target.value);
  };

  return (
    <LessonsStep
      formik={formik}
      handleBackButtonClick={handleBackButtonClick}
      handleChangeOption={handleChangeOption}
      selectOption={selectOption}
    />
  );
};

export default LessonsStepContainer;
