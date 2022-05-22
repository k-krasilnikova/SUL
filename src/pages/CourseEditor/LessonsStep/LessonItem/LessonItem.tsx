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
  ItemTitle,
  LessonItemWrapper,
} from './styled';

const LessonItem: FC<ILessonItemProps> = ({
  handleChangeOption,
  selectOption,
  formik,
  material,
  index,
  lessonsContent,
}) => (
  <>
    {Object.values(lessonsContent)?.map((lesson) => (
      <LessonItemWrapper>
        <ItemTitle>
          {Titles.lessonCount} {material.stage}
        </ItemTitle>
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
                ? `${Titles.videoUrlTitle}`
                : `${Titles.textUrlTitle}`}
            </InputLabel>
            {selectOption === (ContentElementType.video || ContentElementType.presentation) ? (
              <InputText
                id={`materials[${index}].content[${index}].material`}
                name={`materials[${index}].content[${index}].material`}
                placeholder={lesson?.material}
                value={lesson?.material}
                onChange={formik.handleChange}
              />
            ) : (
              <InputTextArea
                id={`materials[${index}].content[${index}].material`}
                name={`materials[${index}].content[${index}].material`}
                placeholder={lesson?.material}
                value={lesson?.material}
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
