import { FC } from 'react';

import { Titles } from 'constants/courseEditor';
import { ILessonItemProps } from 'pages/CourseEditor/types';
import { ContentElementType } from 'enums/materials';

import {
  FieldSelect,
  InputBox,
  InputLabel,
  InputText,
  InputTextArea,
  LessonInnerBox,
  LessonItemTitle,
  LessonItemWrapper,
} from './styled';

const LessonItem: FC<ILessonItemProps> = ({
  handleChangeOption,
  selectOption,
  formik,
  material,
  index,
}) => (
  <>
    {material &&
      formik.values?.materials[index]?.content?.map((lesson, key) => (
        <LessonItemWrapper key={formik.values.materials[index].stage}>
          <LessonItemTitle>
            {Titles.lessonCount} {formik.values.materials[index].stage}
          </LessonItemTitle>
          <LessonInnerBox>
            <FieldSelect onChange={handleChangeOption}>
              <option value="video" label="Video">
                {selectOption}
              </option>
              <option value="text" label="Text">
                {selectOption}
              </option>
            </FieldSelect>
            <InputBox>
              <InputLabel>
                {selectOption === (ContentElementType.video || ContentElementType.presentation)
                  ? `${Titles.videUrlTitle}`
                  : `${Titles.textUrlTitle}`}
              </InputLabel>
              {selectOption === (ContentElementType.video || ContentElementType.presentation) ? (
                <InputText
                  id={`materials[${index}].content[${key}].material`}
                  name={`materials[${index}].content[${key}].material`}
                  placeholder={lesson.material}
                  value={lesson.material}
                  onChange={formik.handleChange}
                />
              ) : (
                <InputTextArea
                  id={`materials[${index}].content[${key}].material`}
                  name={`materials[${index}].content[${key}].material`}
                  placeholder={lesson.material}
                  value={lesson.material}
                  onChange={formik.handleChange}
                />
              )}
              <InputLabel>{Titles.exerciseTitle}</InputLabel>
              <InputText
                id={`materials[${index}].exercise.title`}
                name={`materials[${index}].exercise.title`}
                placeholder={material.exercise?.title}
                value={material.exercise?.title}
                onChange={formik.handleChange}
              />
              <InputLabel>{Titles.exerciseDescription}</InputLabel>
              <InputTextArea
                id={`materials[${index}].exercise.task`}
                name={`materials[${index}].exercise.task`}
                placeholder={material.exercise?.task}
                value={material.exercise?.task}
                onChange={formik.handleChange}
              />
            </InputBox>
          </LessonInnerBox>
        </LessonItemWrapper>
      ))}
  </>
);

export default LessonItem;
