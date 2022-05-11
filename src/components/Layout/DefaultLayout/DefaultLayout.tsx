import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@mui/material/Grid';

import Loader from 'components/Loader';
import { IDefaultLayoutProps } from 'components/Layout/types';

const DefaultLayout: FC<IDefaultLayoutProps> = ({ pageName, children }) => (
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
