import React, { Suspense } from 'react';
import Grid from '@mui/material/Grid';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Loader from 'components/Loader';
import { Header } from './Header';
import Menu from './Menu';
import { GridHeader, PageWrapper, GridMenu } from './styled';

interface Props {
  pageName: string | undefined;
  children: React.ReactNode;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  isSqueeze?: boolean;
  handleSqueeze?: () => void;
}

const AuthorizedLayout: React.FC<Props> = ({
  pageName,
  firstName,
  lastName,
  avatar,
  isSqueeze,
  handleSqueeze,
  children,
}) => (
  <HelmetProvider>
    <Helmet>
      <title>{pageName}</title>
    </Helmet>
    <Grid container>
      <GridHeader item xs={12}>
        <Header firstName={firstName} lastName={lastName} avatar={avatar} />
      </GridHeader>
      <GridMenu isSqueeze={isSqueeze}>
        <Menu isSqueeze={isSqueeze} handleSqueeze={handleSqueeze} />
      </GridMenu>
      <PageWrapper isSqueeze={isSqueeze}>
        <Suspense fallback={<Loader color="primary" />}>{children}</Suspense>
      </PageWrapper>
    </Grid>
  </HelmetProvider>
);

export default AuthorizedLayout;
