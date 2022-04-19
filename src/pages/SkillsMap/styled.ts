import { styled } from '@mui/material';

import theme from 'themeSettings';

export const SkillsWrapper = styled('div')({
  padding: '40px 30px',
  fontFamily: 'Ubuntu',
  height: 'calc(100% - 100px)',
  maxWidth: '1800px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 10px',
  },
  [theme.breakpoints.down(960)]: {
    height: 'auto',
  },
});

export const Position = styled('h2')({
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '31px',
  marginTop: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '25px',
  },
});

export const Map = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  '& div:last-child': {
    marginRight: 0,
  },
  [theme.breakpoints.down(960)]: {
    width: '100%',
    flexDirection: 'column',
  },
});

export const Rank = styled('div')<{ selected?: boolean }>(({ selected }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '430px',
  height: '100%',
  padding: '20px',
  marginRight: '40px',
  borderRadius: '10px',
  backgroundColor: '#f1f1f1',
  ...(selected && {
    border: '4px solid rgb(212 62 65 / 20%)',
  }),
  [theme.breakpoints.down('lg')]: {
    marginRight: '15px',
  },
  [theme.breakpoints.down(960)]: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
  },
}));

export const RankTitle = styled('h4')({
  fontSize: '18px',
  fontWeight: 500,
  marginTop: 0,
});

export const Courses = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
