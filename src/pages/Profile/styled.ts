import styled from 'styled-components';

import theme from 'themeSettings';

export const ProfileBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: '88px 40px 70px 122px',
  [theme.breakpoints.down('xl')]: {
    flexDirection: 'row',
    margin: '60px 40px 60px 40px',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'row',
    margin: '40px 40px 50px 40px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    margin: '30px 20px 15px 60px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '30px 10px 15px 20px',
  },
});

export const AvatarWrapper = styled('div')({
  textAlign: 'center',
  marginRight: '100px',
  marginLeft: '0px',
  width: '219px',
  [theme.breakpoints.down('xl')]: {
    marginRight: '60px',
    width: '190px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '0px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    marginBottom: '14px',
    width: '80px',
  },
});
