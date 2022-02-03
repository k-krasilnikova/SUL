import styled from 'styled-components';
import { keyframes } from '@mui/system';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderIcon = styled('div')({
  width: '100% !important',
  height: '100% !important',
  background: 'gray',
  '& img': {
    display: 'block',
    animation: `${spin} 1.4s linear infinite`,
  },
});
