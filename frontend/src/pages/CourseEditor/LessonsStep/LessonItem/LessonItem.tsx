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
  formik: {
    handleSubmit: (event: BaseSyntheticEvent) => void;
    handleChange?: (event: BaseSyntheticEvent) => void;
    videoURL?: string;
    textDescription?: string;
    exerciseTitle?: string;
    exerciseDescription?: string;
  };
  selectOption: string;
  handleChangeOption?: (event: BaseSyntheticEvent) => void;
}

const LessonItem: FC<ILessonItemProps> = ({ handleChangeOption, selectOption, formik }) => (
  <LessonItemWrapper>
    <LessonItemTitle>Lesson № 1</LessonItemTitle>
    <form onSubmit={formik.handleSubmit}>
      <LessonInput>
        <InputSelect onChange={handleChangeOption}>
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
              placeholder="/youtube.com/"
              value={formik.videoURL}
              onChange={formik.handleChange}
            />
          ) : (
            <InputTextArea
              id="textDescription"
              placeholder="Description"
              value={formik.textDescription}
              onChange={formik.handleChange}
            />
          )}
          <InputLabel>Exercise Title</InputLabel>
          <InputText
            id="exerciseTitle"
            placeholder="/youtube.com/"
            value={formik.exerciseTitle}
            onChange={formik.handleChange}
          />
          <InputLabel>Exercise Description</InputLabel>
          <InputTextArea
            id="exerciseDescription"
            placeholder="Description"
            value={formik.exerciseDescription}
            onChange={formik.handleChange}
          />
        </InputBox>
      </LessonInput>
    </form>
  </LessonItemWrapper>
);

export default LessonItem;
