import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@mui/material';

import Loader from 'components/Loader';
import { TDefaultLayoutProps } from 'components/Layout/types';

const DefaultLayout: FC<TDefaultLayoutProps> = ({ pageName, children }) => (
  <>
    <Helmet>
      <title>{pageName}</title>
    </Helmet>
    <Grid container>
      <Grid item xs={12}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Grid>
    </Grid>
  </>
);

export default DefaultLayout;
