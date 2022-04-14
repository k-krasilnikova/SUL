import { styled } from '@mui/styles';
import { Box } from '@mui/material';

export const SkillContainer = styled('div')({
  width: '172px',
  height: '195px',
  margin: '16px',
  padding: '16px',
  border: '1px solid #919195',
  borderRadius: '4px',
  boxSizing: 'border-box',
  backgroundColor: '#EFEFF0',
});

export const SkillImage = styled(Box)({
  width: '80px',
  height: '80px',
});

export const SkillName = styled('p')({
  fontFamily: 'Ubuntu',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '21px',
  color: '#000',
});

export const SkillGroup = styled('p')({
  width: '140px',
  height: '29px',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '21px',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: '#848488',
  borderRadius: '4px',
  backgroundColor: '#fff',
});
