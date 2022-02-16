import styled from 'styled-components';

import theme from 'themeSettings';

export const Arrow = styled('svg')({
  [theme.breakpoints.down('sm')]: {
    width: '5px !important',
    height: '11px !important',
  },
});
