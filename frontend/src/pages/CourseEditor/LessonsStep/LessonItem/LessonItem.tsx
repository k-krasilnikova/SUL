import { FC } from 'react';
import { MenuItem } from '@mui/material';

import { LessonType } from 'enums/materials';
import { Numbers } from 'enums/numbers';
import { LESSONS_TYPE, EditorTitles } from 'constants/courseEditor';
import { ILessonItemProps } from 'pages/CourseEditor/types';
import { ContentElementType } from 'enums/materials';
import { Numbers } from 'enums/numbers';
import { LESSONS_TYPE, LESSONS_TYPE_TITLE_MAP, EditorTitles } from 'constants/courseEditor';
import { Field } from 'pages/CourseEditor/DefinitionStep/styled';

import {
  InputBox,
  InputTitle,
  InputTextArea,
  ItemTitle,
  LessonInnerBox,
  LessonItemWrapper,
} from './styled';

const LessonItem: FC<ILessonItemProps> = ({ formik, material, index }) => (
  <LessonItemWrapper>
    <ItemTitle>
      {EditorTitles.lessonCount} {index + Numbers.one}
    </ItemTitle>
    <LessonInnerBox>
      <Field
        select
        value={material.type}
        id={`materials[${index}].type`}
        name={`materials[${index}].type`}
        onChange={formik.handleChange}
      >
        {LESSONS_TYPE.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Field>
      <InputBox>
        <InputTitle>{LESSONS_TYPE_TITLE_MAP[material.type]}</InputTitle>
        {material.type === ContentElementType.video ||
        material.type === ContentElementType.presentation ? (
          <Field
            id={`materials[${index}].material`}
            name={`materials[${index}.material`}
            placeholder={material.material}
            value={material.material}
            onChange={formik.handleChange}
          />
        ) : (
          <InputTextArea
            multiline
            id={`materials[${index}].material`}
            name={`materials[${index}.material`}
            value={material.material}
            onChange={formik.handleChange}
          />
        )}
        <InputTitle>{EditorTitles.exerciseTitle}</InputTitle>
        <Field
          id={`materials[${index}].exercise.title`}
          name={`materials[${index}].exercise.title`}
          placeholder={material?.exercise?.title}
          value={material?.exercise?.title}
          onChange={formik.handleChange}
        />
        <InputTitle>{EditorTitles.exerciseDescription}</InputTitle>
        <InputTextArea
          multiline
          id={`materials[${index}].exercise.task`}
          name={`materials[${index}].exercise.task`}
          value={material?.exercise?.task}
          onChange={formik.handleChange}
        />
      </InputBox>
    </LessonInnerBox>
  </LessonItemWrapper>
);

export default LessonItem;
