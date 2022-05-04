import { FC, useState, BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router';

import LessonsStep from './LessonsStep';

interface ILessonsStepContainerProps {
  formValues?: any;
  handleSubmit?: () => void;
}

const LessonsStepContainer: FC<ILessonsStepContainerProps> = ({ formValues, handleSubmit }) => {
  const [selectOption, setSelectOption] = useState('video');
  const [lessonInputValues, setLessonInputValues] = useState({
    videoURL: formValues?.videoURL,
    textDescription: formValues?.textDescription,
    exerciseTitle: formValues?.exerciseTitle,
    exerciseDescription: formValues?.exerciseDescription,
  });

  // eslint-disable-next-line no-console
  console.log(lessonInputValues, 'lessonInputValues');
  // eslint-disable-next-line no-console
  console.log(formValues, 'formValues');

  const navigate = useNavigate();

  const handleChange = (event: BaseSyntheticEvent) => {
    setSelectOption(event.target.value);
  };

  const handleBackButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  const checkPastedValue = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const inputValue = event.target.value;
    const formattedValue = inputValue.split(/\s+/).join(' ').trimStart().trimEnd();
    setLessonInputValues((prev) => ({
      ...prev,
      [event.target.id]: formattedValue,
    }));
  };

  return (
    <LessonsStep
      formValues={formValues}
      handleBackButtonClick={handleBackButtonClick}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      selectOption={selectOption}
      checkPastedValue={checkPastedValue}
      lessonInputValues={lessonInputValues}
    />
  );
};

export default LessonsStepContainer;
