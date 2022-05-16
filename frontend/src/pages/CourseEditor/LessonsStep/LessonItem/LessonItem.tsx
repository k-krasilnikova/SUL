import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ILessonItemProps } from 'pages/CourseEditor/types';
import { ContentElementType } from 'enums/materials';

import {
  InputBox,
  InputLabel,
  InputSelect,
  InputText,
  InputTextArea,
  LessonInput,
  LessonItemTitle,
  LessonItemWrapper,
  SelectItem,
} from './styled';

const LessonItem: FC<ILessonItemProps> = ({
  handleChangeOption,
  selectOption,
  formik,
  material,
  id,
}) => (
  <LessonItemWrapper>
    {material &&
      material?.content.map((lesson, n) => (
        <form key={material.stage}>
          <LessonItemTitle>
            {Titles.lessonCount} {material.stage}
          </LessonItemTitle>
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
              <InputLabel>
                {selectOption === (ContentElementType.video || ContentElementType.presentation)
                  ? 'Video URL'
                  : 'Text URL'}
              </InputLabel>
              {selectOption === (ContentElementType.video || ContentElementType.presentation) ? (
                <InputText
                  id={`materials[${id}].content[${n}].material`}
                  name={`materials[${id}].content[${n}].material`}
                  placeholder={lesson.material}
                  value={lesson.material}
                  onChange={formik.handleChange}
                />
              ) : (
                <InputTextArea
                  id={`materials[${id}].content[${n}].material`}
                  name={`materials[${id}].content[${n}].material`}
                  placeholder={lesson.material}
                  value={lesson.material}
                  onChange={formik.handleChange}
                />
              )}
              <InputLabel>{Titles.exerciseTitle}</InputLabel>
              <InputText
                id={`materials[${id}].exercise.title`}
                name={`materials[${id}].exercise.title`}
                placeholder={material.exercise?.title}
                value={material.exercise?.title}
                onChange={formik.handleChange}
              />
              <InputLabel>{Titles.exerciseDescription}</InputLabel>
              <InputTextArea
                id={`materials[${id}].exercise.task`}
                name={`materials[${id}].exercise.task`}
                placeholder={material.exercise?.task}
                value={material.exercise?.task}
                onChange={formik.handleChange}
              />
            </InputBox>
          </LessonInput>
        </form>
      ))}
  </LessonItemWrapper>
);

export default LessonItem;
