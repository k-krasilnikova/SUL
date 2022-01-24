import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Header } from './Header';
import Menu from './Menu';
import { GridHeader, PageWrapper } from './styled';

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
      <GridHeader item xs={12}>
        <Header firstName={firstName} lastName={lastName} avatar={avatar} />
      </GridHeader>
      <Grid item xs={3}>
        <Menu />
      </Grid>
      <PageWrapper item xs={9}>
        {children}
      </PageWrapper>
    </Grid>
  </HelmetProvider>
);

export default AuthorizedLayout;
