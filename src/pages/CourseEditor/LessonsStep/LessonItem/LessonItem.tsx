import { FC } from 'react';
import { MenuItem } from '@mui/material';

import { LessonType } from 'enums/materials';
import { LESSONS_TYPE, Titles } from 'constants/courseEditor';
import { ILessonItemProps } from 'pages/CourseEditor/types';
import { Field } from 'pages/CourseEditor/DefinitionStep/styled';

import {
  InputBox,
  InputTitle,
  InputTextArea,
  ItemTitle,
  LessonInnerBox,
  LessonItemWrapper,
} from './styled';

const LessonItem: FC<ILessonItemProps> = ({ formik, material, index }) => {
  return (
    <LessonItemWrapper>
      <ItemTitle>
        {Titles.lessonCount} {index + 1}
      </ItemTitle>
      <LessonInnerBox>
        <Field
          select
          value={material.type}
          id={`materials[${index}].type`}
          name={`materials[${index}].type`}
          onChange={formik.handleChange}
        >
          {LESSONS_TYPE.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <InputBox>
          <InputTitle>{material.type}</InputTitle>
          {material.type === LessonType.video || material.type === LessonType.presentation ? (
            <Field
              id={`materials[${index}].material`}
              name={`materials[${index}.material`}
              placeholder={material.material}
              value={material.material}
              onChange={formik.handleChange}
            />
          ) : (
            <InputTextArea
              id={`materials[${index}].material`}
              name={`materials[${index}.material`}
              placeholder={material.material}
              value={material.material}
              onChange={formik.handleChange}
            />
          )}
          <InputTitle>{Titles.exerciseTitle}</InputTitle>
          <Field
            id={`materials[${index}].exercise.title`}
            name={`materials[${index}].exercise.title`}
            placeholder={material?.exercise?.title}
            value={material?.exercise?.title}
            onChange={formik.handleChange}
          />
          <InputTitle>{Titles.exerciseDescription}</InputTitle>
          <InputTextArea
            id={`materials[${index}].exercise.task`}
            name={`materials[${index}].exercise.task`}
            placeholder={material?.exercise?.task}
            value={material?.exercise?.task}
            onChange={formik.handleChange}
          />
        </InputBox>
      </LessonInnerBox>
    </LessonItemWrapper>
  );
};

export default LessonItem;
