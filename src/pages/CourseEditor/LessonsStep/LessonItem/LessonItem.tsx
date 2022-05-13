import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ILessonItemProps } from 'pages/CourseEditor/types';

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

const LessonItem: FC<ILessonItemProps> = ({ handleChangeOption, selectOption, formik }) => (
  <LessonItemWrapper>
    <LessonItemTitle>{Titles.lessonCount}</LessonItemTitle>
    <form>
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
              value={formik.values.videoURL}
              onChange={formik.handleChange}
            />
          ) : (
            <InputTextArea
              id="textDescription"
              placeholder="Description"
              value={formik.values.textDescription}
              onChange={formik.handleChange}
            />
          )}
          <InputLabel>{Titles.exerciseTitle}</InputLabel>
          <InputText
            id="exerciseTitle"
            placeholder="/youtube.com/"
            value={formik.values.exerciseTitle}
            onChange={formik.handleChange}
          />
          <InputLabel>{Titles.exerciseDescription}</InputLabel>
          <InputTextArea
            id="exerciseDescription"
            placeholder="Description"
            value={formik.values.exerciseDescription}
            onChange={formik.handleChange}
          />
        </InputBox>
      </LessonInput>
    </form>
  </LessonItemWrapper>
);

export default LessonItem;
