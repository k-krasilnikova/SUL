import React from 'react';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AccordionSummary, AccordionDetails, Typography, ClickAwayListener } from '@mui/material';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { UserAvatar } from 'components/Avatar';
import { alertIcon, filterIcon, logOutIcon, menuMobileIcon } from 'icons';
import { brandLogo } from 'images';

import {
  LayoutHeader,
  SpaceHolder,
  BrandLogoLink,
  BrandLogo,
  HeaderContent,
  Search,
  NotificationsButton,
  FilterButton,
  Notifications,
  Filter,
  FilterAccordion,
  UserBlock,
  UserName,
  LogOut,
  RelativeWrapper,
  MobileMenuIcon,
} from './styled';

interface Props {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  isNotificationsOpen: boolean;
  isFilterOpen: boolean;
  handleNotificationsOpen: () => void;
  handleFilterOpen: () => void;
  handleNotificationsClose: () => void;
  handleFilterClose: () => void;
  handleConfirm: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  pageName?: string;
}
type HeaderProps = User & Props;

const Header: React.FC<HeaderProps> = ({
  firstName,
  lastName,
  avatar,
  isNotificationsOpen,
  isFilterOpen,
  handleNotificationsOpen,
  handleFilterOpen,
  handleNotificationsClose,
  handleFilterClose,
  handleConfirm,
  isMobileMenuOpen,
  toggleMobileMenu,
  pageName,
}) => (
  <LayoutHeader container>
    <BrandLogoLink to={PATHS.profile}>
      <BrandLogo alt=":iTechArt" src={brandLogo} />
    </BrandLogoLink>
    <HeaderContent>
      <Search
        disableUnderline
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" />
          </InputAdornment>
        }
        pagename={pageName}
        menuopen={isMobileMenuOpen.toString()}
      />
      <ClickAwayListener onClickAway={handleNotificationsClose}>
        <RelativeWrapper>
          <NotificationsButton onClick={handleNotificationsOpen}>
            <img alt="notifications" src={alertIcon} />
          </NotificationsButton>
          {isNotificationsOpen ? <Notifications>Notifications here</Notifications> : null}
        </RelativeWrapper>
      </ClickAwayListener>
      <ClickAwayListener onClickAway={handleFilterClose}>
        <RelativeWrapper>
          <FilterButton
            onClick={handleFilterOpen}
            pagename={pageName}
            menuopen={isMobileMenuOpen.toString()}
          >
            <img alt="filter" src={filterIcon} />
          </FilterButton>
          {isFilterOpen ? (
            <Filter>
              <FilterAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Status</Typography>
                </AccordionSummary>
                <AccordionDetails>Statuses here</AccordionDetails>
              </FilterAccordion>
              <FilterAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Technology</Typography>
                </AccordionSummary>
                <AccordionDetails>Technologies here</AccordionDetails>
              </FilterAccordion>
            </Filter>
          ) : null}
        </RelativeWrapper>
      </ClickAwayListener>
      <SpaceHolder />
      <UserBlock to={PATHS.profile}>
        <UserAvatar avatar={avatar} size="small" />
        <UserName>{`${firstName} ${lastName}`}</UserName>
      </UserBlock>
      <LogOut onClick={handleConfirm}>
        <img alt="log_out" src={logOutIcon} />
      </LogOut>
      <MobileMenuIcon openMenu={isMobileMenuOpen} onClick={toggleMobileMenu}>
        <img alt="menu" src={menuMobileIcon} />
      </MobileMenuIcon>
    </HeaderContent>
  </LayoutHeader>
);
export default Header;
