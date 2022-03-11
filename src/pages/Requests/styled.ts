import styled from 'styled-components';

import theme from 'themeSettings';

export const RequestsWrapper = styled('div')({
  padding: '40px 30px',
  fontFamily: 'Ubuntu',
  height: 'calc(100% - 100px)',
  maxWidth: '1800px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 10px',
  },
});
