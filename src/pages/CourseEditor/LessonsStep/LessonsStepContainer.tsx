import { FC, useState, BaseSyntheticEvent } from 'react';

import { IStepProps } from 'pages/CourseEditor/types';

import LessonsStep from './LessonsStep';

const LessonsStepContainer: FC<IStepProps> = ({ formik, courseData }) => {
  const [selectOption, setSelectOption] = useState<string>('video');

  const handleChangeOption = ({ target }: BaseSyntheticEvent) => {
    setSelectOption(target.value);
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
