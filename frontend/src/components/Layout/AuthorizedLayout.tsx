import React, { Suspense } from 'react';
import Grid from '@mui/material/Grid';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Loader from 'components/Loader';
import { Notification as NotificationType } from 'types/notification';

import { Header } from './Header';
import Menu from './Menu';
import { MobileMenu } from './MobileMenu';
import { GridHeader, PageWrapper, GridMenu } from './styled';

interface Props {
  pageName: string | undefined;
  children: React.ReactNode;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  classes: {
    [key: string]: string;
  };
  notifications?: NotificationType[];
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
  notifications,
  children,
  isMobileMenuOpen,
  toggleMobileMenu,
  isSqueeze,
  handleSqueeze,
  classes,
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
          notifications={notifications}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </GridHeader>
      <>
        <GridMenu classes={isSqueeze && { root: classes?.hideGridMenu }}>
          <Menu isSqueeze={isSqueeze} handleSqueeze={handleSqueeze} />
        </GridMenu>
        <PageWrapper
          classes={{ root: isSqueeze ? classes?.showPageWrapper : classes?.hidePageWrapper }}
        >
          <Suspense fallback={<Loader color="primary" />}>{children}</Suspense>
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            firstName={firstName}
            lastName={lastName}
            avatar={avatar}
          />
        </PageWrapper>
      </>
    </Grid>
  </HelmetProvider>
);

export default AuthorizedLayout;
