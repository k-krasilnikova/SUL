import { FC } from 'react';
import { MenuItem } from '@mui/material';

import { ContentElementType } from 'enums/materials';
import { ILessonItemProps } from 'pages/CourseEditor/types';
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

const LessonItem: FC<ILessonItemProps> = ({ formik, material, index, onFieldBlur }) => (
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
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={
          formik.touched.materials?.[index]?.type &&
          Boolean(formik.errors?.materials?.[index]?.type)
        }
        helperText={
          formik.touched.materials?.[index]?.type && formik.errors?.materials?.[index]?.type
        }
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
            error={
              formik.touched.materials?.[index]?.material &&
              Boolean(formik.errors?.materials?.[index]?.material)
            }
            helperText={
              formik.touched.materials?.[index]?.material &&
              formik.errors?.materials?.[index]?.material
            }
          />
        ) : (
          <InputTextArea
            multiline
            id={`materials[${index}].material`}
            name={`materials[${index}.material`}
            value={material.material}
            onChange={formik.handleChange}
            onBlur={onFieldBlur}
            error={
              formik.touched.materials?.[index]?.material &&
              Boolean(formik.errors?.materials?.[index]?.material)
            }
            helperText={
              formik.touched.materials?.[index]?.material &&
              formik.errors?.materials?.[index]?.material
            }
          />
        )}
        <InputTitle>{EditorTitles.exerciseTitle}</InputTitle>
        <Field
          id={`materials[${index}].exercise.title`}
          name={`materials[${index}].exercise.title`}
          placeholder={material?.exercise?.title}
          value={material?.exercise?.title}
          onChange={formik.handleChange}
          onBlur={onFieldBlur}
          error={Boolean(formik.errors?.materials?.[index]?.exercise?.title)}
          helperText={formik.errors?.materials?.[index]?.exercise?.title}
        />
        <InputTitle>{EditorTitles.exerciseDescription}</InputTitle>
        <InputTextArea
          multiline
          id={`materials[${index}].exercise.task`}
          name={`materials[${index}].exercise.task`}
          value={material?.exercise?.task}
          onChange={formik.handleChange}
          onBlur={onFieldBlur}
          error={Boolean(formik.errors?.materials?.[index]?.exercise?.task)}
          helperText={formik.errors?.materials?.[index]?.exercise?.task}
        />
      </InputBox>
    </LessonInnerBox>
  </LessonItemWrapper>
);

export default LessonItem;
