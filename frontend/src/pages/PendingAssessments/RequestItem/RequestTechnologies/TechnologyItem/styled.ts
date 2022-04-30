import { styled } from '@mui/material';

import { HoverSkillInfoText as HoverInfo } from '../../../../Profile/UserSkills/styled';

export const TechnologyWrapper = styled('div')({
  margin: '0 3px',
  position: 'relative',
});

export const HoverSkillInfoText = styled(HoverInfo)({
  top: '30px',
  left: '0px',
  zIndex: '1000',
});
