import React, { Suspense } from 'react';
import Grid from '@mui/material/Grid';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Loader from 'components/Loader';

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
      <Grid item xs={3} xl={2}>
        <Menu />
      </Grid>
      <PageWrapper item xs={9} xl={10}>
        <Suspense fallback={<Loader color="primary" />}>{children}</Suspense>
      </PageWrapper>
    </Grid>
  </HelmetProvider>
);

export default AuthorizedLayout;
