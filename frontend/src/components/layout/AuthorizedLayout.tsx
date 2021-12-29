import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Menu from './Menu';

interface Props {
  pageName: string;
  children: React.ReactNode;
}

const AuthorizedLayout: React.FC<Props> = ({ pageName, children }) => (
  <>
    <Helmet>
      <title>{pageName}</title>
    </Helmet>
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  </>
);

export default AuthorizedLayout;
