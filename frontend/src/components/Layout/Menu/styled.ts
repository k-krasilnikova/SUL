import styled from 'styled-components';

import { HEADER_HEIGHT } from '../styled';

export const MenuTabs = styled('div')({
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  backgroundColor: 'white',
  borderRight: '2px solid #f0f2f7',
  fontSize: '24px',
  fontFamily: '"Lato", sans-serif',
  margin: '0px',
  paddingTop: '20px',
});
