import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

export const InfoContainer = styled(Box)({
  display: 'inline-block',
  width: '410px',
  justifyContent: 'space-between',
  margin: '20px',
  backgroundColor: 'white',
  height: '50px',
  padding: '10px 5px 10px 5px',
});
export const InfoItem = styled(Typography)({
  display: 'inline-flex',
  width: '100px',
  verticalAlign: 'middle',
  padding: '5px',
  fontSize: '14px',
  lineHeight: '24px',
  color: 'grey',
});
