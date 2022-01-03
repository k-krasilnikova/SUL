import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

interface Size {
  size?: string;
}

export const UserAvatarRounded = styled(Avatar)<Size>(({ size }) => ({
  display: 'inline-block',
  margin: '1% auto',
  width: '100px',
  height: '100px',
  ...(size === 'large' && {
    width: '100px',
    height: '100px',
  }),
  ...(size === 'small' && {
    width: '40px',
    height: '40px',
  }),
}));
