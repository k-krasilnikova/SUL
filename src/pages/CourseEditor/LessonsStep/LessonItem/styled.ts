import { styled, Box, Typography } from '@mui/material';

import theme from 'themeSettings';
import { SectionName } from 'pages/CourseEditor/styled';
import { FieldWrapper } from 'pages/CourseEditor/DefinitionStep/styled';

interface IMaterialFieldWrapper {
  isOnlyTextInput?: boolean;
}

export const LessonItemWrapper = styled(Box)({
  margin: '32px 0 28px',
});

export const ItemTitle = styled(SectionName)({
  fontSize: '24px',
});

export const LessonInnerBox = styled(Box)({
  marginTop: '30px',
});

export const InputBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const InputTitle = styled(Typography)({
  margin: '40px 0 20px',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '29px',
  letterSpacing: 1,
  color: '#000',
});

export const MaterialFieldWrapper = styled(FieldWrapper)<IMaterialFieldWrapper>(
  ({ isOnlyTextInput }) => ({
    marginBottom: 0,
    ...(isOnlyTextInput && {
      width: '667px',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    }),
  }),
);

export const TaskHint = styled(Typography)({
  margin: '6px 0',
  verticalAlign: 'bottom',
  fontSize: '12px',
  color: '#A2A2A2',
});
