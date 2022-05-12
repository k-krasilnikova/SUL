import { FC, Suspense } from 'react';
import { Grid } from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Loader from 'components/Loader';
import { IAuthorizedLayoutProps } from 'components/Layout/types';

import Header from './Header';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { GridHeader, PageWrapper, GridMenu } from '../styled';

const AuthorizedLayout: FC<IAuthorizedLayoutProps> = ({
  children,
  pageName,
  userInfo,
  notifications,
  isSqueeze,
  isMobileMenuOpen,
  handleConfirmLogOutOpen,
  toggleMobileMenu,
  toggleSqueeze,
}) => (
  <HelmetProvider>
    <Helmet>
      <title>{pageName}</title>
    </Helmet>
    <Grid container>
      <GridHeader item xs={12}>
        <Header
          userInfo={userInfo}
          notifications={notifications}
          isMobileMenuOpen={isMobileMenuOpen}
          handleConfirmLogOutOpen={handleConfirmLogOutOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </GridHeader>
      <>
        <GridMenu isSqueeze={isSqueeze}>
          <Menu isSqueeze={isSqueeze} toggleSqueeze={toggleSqueeze} />
        </GridMenu>
        <PageWrapper isSqueeze={isSqueeze}>
          <Suspense fallback={<Loader />}>{children}</Suspense>
          <MobileMenu
            userInfo={userInfo}
            isMobileMenuOpen={isMobileMenuOpen}
            handleConfirmLogOutOpen={handleConfirmLogOutOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </PageWrapper>
      </>
    </Grid>
  </HelmetProvider>
);

export default AuthorizedLayout;
