import { styled, Box, InputLabel } from '@mui/material';

export const NewAvatarImageWrapper = styled(Box)<{ avatarUrl: string }>(({ avatarUrl }) => ({
  position: 'relative',
  height: 'inherit',
  backgroundColor: '#B6B6B6',
  ...(avatarUrl && {
    backgroundImage: `url("${avatarUrl}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }),
  '&:hover': {
    backgroundColor: 'rgba(27, 27, 28, 0.57)',
    opacity: 0.5,
  },
}));

export const AddImageIcon = styled('img')<{ avatarUrl: string }>(({ avatarUrl }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100px',
  height: '100px',
  transform: 'translate(-50%, -50%)',
  ...(avatarUrl && {
    display: 'none',
  }),
}));

export const AddImageInput = styled('input')({
  position: 'absolute',
  zIndex: -10,
  opacity: 0,
  pointerEvents: 'none',
});

export const NewImageLabel = styled(InputLabel)({
  width: '100%',
  height: '100%',
});
