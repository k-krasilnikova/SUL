import { Box, styled, TextField } from '@mui/material';

import Button from 'components/Button';

import { SectionName } from '../DefinitionStep/styled';

export const SkillsText = styled(SectionName)({
  fontSize: '24px',
});

export const SkillWrapper = styled(Box)({
  width: '563px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '52px',
});

export const SkillField = styled(TextField)({
  width: '250px',
  height: '53px',
});

export const SkillButton = styled(Button)({
  display: 'flex',
  alignSelf: 'flex-end',
  fontSize: '18px',
  width: '136px',
  height: '50px',
  fontWeight: 500,
});