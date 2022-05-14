import { FC, useState, BaseSyntheticEvent } from 'react';

import { ILessonsStepContainerProps } from 'pages/CourseEditor/types';

import LessonsStep from './LessonsStep';

const LessonsStepContainer: FC<ILessonsStepContainerProps> = ({ formik, courseData }) => {
  const [selectOption, setSelectOption] = useState<string>('video');

  const handleChangeOption = (event: BaseSyntheticEvent) => {
    setSelectOption(event.target.value);
  };

  return (
    <LessonsStep
      formik={formik}
      courseData={courseData}
      handleChangeOption={handleChangeOption}
      selectOption={selectOption}
    />
  );
};

export default LessonsStepContainer;
