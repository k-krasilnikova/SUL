import { FC, useState, BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router';

import { ILessonsStepContainerProps } from 'pages/CourseEditor/types';

import LessonsStep from './LessonsStep';

const LessonsStepContainer: FC<ILessonsStepContainerProps> = ({ formik }) => {
  const [selectOption, setSelectOption] = useState<string>('video');

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
