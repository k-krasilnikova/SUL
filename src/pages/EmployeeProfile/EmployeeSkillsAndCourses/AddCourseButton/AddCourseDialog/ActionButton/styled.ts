import styled from 'styled-components';

import Button from 'components/Button';
import theme from 'themeSettings';

export const StyledButton = styled(Button)({
  '&.MuiButton-root': {
    width: '82px',
    height: '40px',
    marginLeft: 'auto',
    marginBottom: '8px',
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto 8px',
    },
  },
});
