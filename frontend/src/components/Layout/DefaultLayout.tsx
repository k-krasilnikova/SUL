import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

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
        {children}
      </Grid>
    </Grid>
  </>
);

export default DefaultLayout;
