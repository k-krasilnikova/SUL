import { FC, useState, BaseSyntheticEvent } from 'react';

import { ILessonsStepContainerProps } from 'pages/CourseEditor/types';

import LessonsStep from './LessonsStep';

const LessonsStepContainer: FC<ILessonsStepContainerProps> = ({ formik }) => {
  const [selectOption, setSelectOption] = useState<string>('video');
  const [isAddMoreLessons, setAddMoreLessons] = useState<boolean>(false);

  const handleChangeOption = (event: BaseSyntheticEvent) => {
    setSelectOption(event.target.value);
  };

  // TODO change
  const handleAddMoreLessons = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setAddMoreLessons(true);
  };

  return (
    <LessonsStep
      formik={formik}
      handleChangeOption={handleChangeOption}
      selectOption={selectOption}
      handleAddMoreLessons={handleAddMoreLessons}
      isAddMoreLessons={isAddMoreLessons}
    />
  );
};

export default LessonsStepContainer;
