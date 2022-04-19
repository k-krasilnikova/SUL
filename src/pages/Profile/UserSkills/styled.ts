import { styled, Input, Divider } from '@mui/material';

import theme from 'themeSettings';

interface SkillProps {
  completed?: boolean;
}

export const SearchWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    marginLeft: 0,
  },
  [theme.breakpoints.up('xl')]: {
    marginLeft: '63px',
  },
});

export const SearchSkill = styled(Input)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '33.61px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
  },
});

export const SkillsBox = styled('div')({
  [theme.breakpoints.up('xs')]: {
    maxWidth: '288px',
    marginLeft: '13px',
    marginRight: '19px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '828px',
    marginLeft: '54px',
    marginRight: '47px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
});

export const SkillsList = styled('div')({
  [theme.breakpoints.up('xs')]: {
    paddingTop: '10px',
    maxWidth: '288px',
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '16px',
    maxWidth: '828px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
  },
});

export const SkillsListItem = styled('div')({
  [theme.breakpoints.up('xs')]: {
    paddingTop: '4px',
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    marginLeft: '63px',
  },
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  color: '#2C2525',
});

export const SkillTitle = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.up('sm')]: {
    alignItems: 'start',
  },
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
    height: '23px',
  },
});

export const Star = styled('img')({
  [theme.breakpoints.up('xs')]: {
    width: '10px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '16px',
  },
});

export const Title = styled('div')({
  fontWeight: 'bold',
  marginLeft: '5px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
    paddingTop: 0,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    paddingTop: '3px',
  },
});

export const SkillsInfoList = styled('div')({
  [theme.breakpoints.up('md')]: {
    margin: 0,
  },
  [theme.breakpoints.up('sm')]: {
    margin: '10px 17px',
  },
  [theme.breakpoints.up('xl')]: {
    margin: '17px',
  },
});

export const SkillInfo = styled('div')<SkillProps>(({ completed }) => ({
  display: 'inline-block',
  borderRadius: '5px',
  fontFamily: theme.typography.fontFamily,
  maxWidth: '210px',
  width: '210px',
  height: '100px',
  padding: '16px',
  marginRight: '64px',
  marginBottom: '7px',
  background: '#EAEAEA',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  ...(completed && {
    backgroundColor: '#f5f5f5',
    border: '1px solid #efefef',
  }),
  fontWeight: 'normal',
  verticalAlign: 'middle',
  [theme.breakpoints.down('md')]: {
    minWidth: '120px',
    maxWidth: '150px',
    height: '70px',
    padding: '7px 8px 4px 8px',
    margin: '8px 12px 8px 0',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '12px 32px 12px 0',
  },
  [theme.breakpoints.down(1200)]: {
    marginRight: '32px',
  },
}));

export const SkillInfoFlex = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '56px',
  width: '175px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
    alignItems: 'top',
  },
});

export const SkillProgress = styled('div')({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    width: '24px',
    height: '24px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '41px',
    height: '56px',
  },
});

export const SkillInfoTextWrapper = styled('div')({
  position: 'relative',
});

export const SkillInfoTextWidth = styled('div')({
  width: '70px',
  [theme.breakpoints.down('md')]: {
    width: '60px',
  },
});

export const SkillInfoText = styled('div')({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&: hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '16px',
    lineHeight: '20px',
  },
});

export const HoverSkillInfoText = styled('div')({
  width: 'fit-content',
  padding: '3px',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: '16px',
  right: '-35px',
  fontSize: '12px',
  backgroundColor: '#000',
  color: '#FFF',
  overflow: 'inherit',
  textOverflow: 'unset',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
});

export const SkillInfoStage = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '14px',
    marginTop: '3px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '13px',
    lineHeight: '15px',
  },
});

export const SkillsDivider = styled(Divider)({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
});

export const NoSkills = styled('div')({
  [theme.breakpoints.up('xs')]: {
    marginTop: '50px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '80px',
  },
});

export const ImageWrapper = styled('div')({
  marginRight: '20px',
  [theme.breakpoints.down('md')]: {
    marginRight: '10px',
  },
});
