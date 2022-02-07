import React, { Suspense } from 'react';
import Grid from '@mui/material/Grid';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Slide from '@mui/material/Slide';

import Loader from 'components/Loader';
import { MobileMenuTabs } from 'components/Layout/MobileMenu';

import { Header } from './Header';
import Menu from './Menu';
import { MenuGrid, GridHeader, PageWrapper, MobileMenu, MobileMenuBackground } from './styled';

interface Props {
  pageName: string | undefined;
  children: React.ReactNode;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

const AuthorizedLayout: React.FC<Props> = ({
  pageName,
  firstName,
  lastName,
  avatar,
  children,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <HelmetProvider>
    <Helmet>
      <title>{pageName}</title>
    </Helmet>
    <Grid container>
      <GridHeader item xs={12}>
        <Header
          firstName={firstName}
          lastName={lastName}
          avatar={avatar}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </GridHeader>
      <MenuGrid item xs={3} xl={2}>
        <Menu />
      </MenuGrid>
      <PageWrapper item xs={12} lg={9} xl={10}>
        <Suspense fallback={<Loader color="primary" />}>{children}</Suspense>
        <Slide direction="right" in={isMobileMenuOpen} mountOnEnter unmountOnExit>
          <MobileMenuBackground />
        </Slide>
        <Slide direction="left" in={isMobileMenuOpen} appear={false} mountOnEnter unmountOnExit>
          <MobileMenu>
            <MobileMenuTabs />
          </MobileMenu>
        </Slide>
      </PageWrapper>
    </Grid>
  </HelmetProvider>
);

export default AuthorizedLayout;
