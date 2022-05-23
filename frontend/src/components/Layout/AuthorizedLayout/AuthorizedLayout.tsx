import { FC, Suspense } from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';
import { IAuthorizedLayoutProps } from 'components/Layout/types';

import Header from './Header';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { GridHeader, PageWrapper, GridMenu } from '../styled';

const AuthorizedLayout: FC<IAuthorizedLayoutProps> = ({
  userInfo,
  notifications,
  isSqueeze,
  isMobileMenuOpen,
  handleConfirmLogOutOpen,
  toggleMobileMenu,
  toggleSqueeze,
}) => (
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
        <Suspense fallback={<Loader type={Loaders.content} />}>
          <Outlet />
        </Suspense>
        <MobileMenu
          userInfo={userInfo}
          isMobileMenuOpen={isMobileMenuOpen}
          handleConfirmLogOutOpen={handleConfirmLogOutOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </PageWrapper>
    </>
  </Grid>
);

export default AuthorizedLayout;
