import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Header } from './Header';
import Menu from './Menu';

interface Props {
  pageName: string | undefined;
  children: React.ReactNode;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

const AuthorizedLayout: React.FC<Props> = ({ pageName, firstName, lastName, avatar, children }) => (
  <HelmetProvider>
    <Helmet>
      <title>{pageName}</title>
    </Helmet>
    <Grid container>
      <Grid item xs={12}>
        <Header firstName={firstName} lastName={lastName} avatar={avatar} />
      </Grid>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  </HelmetProvider>
);

export default AuthorizedLayout;
