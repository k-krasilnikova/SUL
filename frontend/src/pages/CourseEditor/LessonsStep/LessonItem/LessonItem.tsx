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
  handleSubmit?: () => void;
  selectOption: string;
}

const LessonItem: FC<ILessonItemProps> = ({ handleChange, selectOption, handleSubmit }) => (
  <LessonItemWrapper>
    <LessonItemTitle>Lesson № 1</LessonItemTitle>
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
            <InputText type="link" value="/youtube.com/" />
          ) : (
            <InputTextArea>Description</InputTextArea>
          )}
          <InputLabel>Exercise Title</InputLabel>
          <InputText type="link" value="/youtube.com/" />
          <InputLabel>Exercise Description</InputLabel>
          <InputTextArea>Description</InputTextArea>
        </InputBox>
      </LessonInput>
      <button type="submit">Add more Lessons</button>
    </form>
  </LessonItemWrapper>
);

export default LessonItem;
