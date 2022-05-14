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

const LessonItem: FC<ILessonItemProps> = ({
  handleChangeOption,
  selectOption,
  formik,
  material,
}) => (
  <LessonItemWrapper>
    <LessonItemTitle>
      {Titles.lessonCount} {material?.exercise?.eN}
    </LessonItemTitle>
    {material &&
      material?.content.map((lesson) => (
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
              <InputLabel>{`${lesson.type}` === 'video' ? 'Video URL' : 'Text URL'}</InputLabel>
              {selectOption === 'video' ? (
                <InputText
                  id="videoURL"
                  placeholder={lesson.material}
                  value={formik.values.videoURL}
                  onChange={formik.handleChange}
                />
              ) : (
                <InputTextArea
                  id="textDescription"
                  placeholder={lesson.material}
                  value={formik.values.textDescription}
                  onChange={formik.handleChange}
                />
              )}
              <InputLabel>{Titles.exerciseTitle}</InputLabel>
              <InputText
                id="exerciseTitle"
                placeholder={material.exercise?.title}
                value={formik.values.exerciseTitle}
                onChange={formik.handleChange}
              />
              <InputLabel>{Titles.exerciseDescription}</InputLabel>
              <InputTextArea
                id="exerciseDescription"
                placeholder={material.exercise?.task}
                value={formik.values.exerciseDescription}
                onChange={formik.handleChange}
              />
            </InputBox>
          </LessonInput>
        </form>
      ))}
  </LessonItemWrapper>
);

export default LessonItem;
