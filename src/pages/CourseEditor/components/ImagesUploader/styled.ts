import { styled, Box, InputLabel } from '@mui/material';

export const NewAvatarImageWrapper = styled(Box)<{ avatarUrl: string }>(({ avatarUrl }) => ({
  position: 'relative',
  height: 'inherit',
  backgroundColor: '#B6B6B6',
  ...(avatarUrl && {
    backgroundImage: `url("${avatarUrl}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }),
  '&:hover': {
    backgroundColor: 'rgba(27, 27, 28, 0.57)',
    opacity: 0.5,
  },
}));

export const AddImageIcon = styled('img')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const AddImageInput = styled('input')({
  position: 'absolute',
  zIndex: -10,
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none',
});

export const NewImageLabel = styled(InputLabel)({
  width: '100%',
  height: '100%',
});
