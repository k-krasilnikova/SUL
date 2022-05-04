import { FC, BaseSyntheticEvent } from 'react';

import {
  LessonItemWrapper,
  LessonItemTitle,
  LessonInput,
  InputSelect,
  SelectItem,
  InputBox,
  InputLabel,
  InputText,
  InputTextArea,
} from './styled';

export interface ILessonItemProps {
  handleChange?: (event: BaseSyntheticEvent) => void;
  checkPastedValue?: (event: BaseSyntheticEvent) => void;
  lessonInputValues?: any;
  handleSubmit?: () => void;
  selectOption: string;
  formValues?: any;
}

const LessonItem: FC<ILessonItemProps> = ({
  handleChange,
  selectOption,
  handleSubmit,
  checkPastedValue,
  formValues,
  lessonInputValues,
}) => (
  <LessonItemWrapper>
    <LessonItemTitle>Lesson № 1</LessonItemTitle>
    <LessonItemTitle>{formValues.exerciseTitle}</LessonItemTitle>
    <form onSubmit={handleSubmit}>
      <LessonInput>
        <InputSelect onChange={handleChange}>
          <SelectItem value="video" label="Video">
            {selectOption}
          </SelectItem>
          <SelectItem value="text" label="Text">
            {selectOption}
          </SelectItem>
        </InputSelect>
        <InputBox>
          <InputLabel>{selectOption === 'video' ? 'Video URL' : 'Text URL'}</InputLabel>
          {selectOption === 'video' ? (
            <InputText
              id="videoURL"
              defaultValue="/youtube.com/"
              value={lessonInputValues.videoUrl}
              onChange={checkPastedValue}
            />
          ) : (
            <InputTextArea
              id="textDescription"
              value={lessonInputValues.textDescription}
              defaultValue="Description"
              onChange={checkPastedValue}
            />
          )}
          <InputLabel>Exercise Title</InputLabel>
          <InputText
            id="exerciseTitle"
            defaultValue="/youtube.com/"
            onChange={checkPastedValue}
            value={lessonInputValues.exerciseTitle}
          />
          <InputLabel>Exercise Description</InputLabel>
          <InputTextArea
            id="exerciseDescription"
            value={lessonInputValues.exerciseDescription}
            defaultValue="Description"
            onChange={checkPastedValue}
          />
        </InputBox>
      </LessonInput>
      <button type="submit">Add more Lessons</button>
    </form>
  </LessonItemWrapper>
);

export default LessonItem;
