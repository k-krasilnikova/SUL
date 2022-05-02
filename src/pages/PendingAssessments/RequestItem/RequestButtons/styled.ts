import { styled } from '@mui/material';

import {
  ButtonsContainer as ButCont,
  ActionButton as ActBut,
} from 'pages/Requests/RequestItem/RequestButtons/styled';

export const ButtonsContainer = styled(ButCont)({
  justifyContent: 'space-around',
});

export const ActionButton = styled(ActBut)({
  width: '90px',
});
