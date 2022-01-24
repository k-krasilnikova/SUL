import React, { Suspense } from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

import Loader from 'components/Loader';

interface Props {
  pageName: string;
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ pageName, children }) => (
  <>
    <Helmet>
      <title>{pageName}</title>
    </Helmet>
    <Grid container>
      <Grid item xs={12}>
        <Suspense fallback={<Loader color="primary" />}>{children}</Suspense>
      </Grid>
    </Grid>
  </>
);

export default DefaultLayout;
