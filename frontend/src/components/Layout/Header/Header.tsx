import React from 'react';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AccordionSummary, AccordionDetails, Typography, ClickAwayListener } from '@mui/material';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { Notification } from 'types/notification';
import { UserAvatar } from 'components/Avatar';
import NotificationsBar from 'components/NotificationsBar';
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
  notifications?: Array<Notification>;
  isNotificationsOpen: boolean;
  isFilterOpen: boolean;
  handleNotificationsOpen: () => void;
  handleFilterOpen: () => void;
  handleNotificationsClose: () => void;
  handleFilterClose: () => void;
  handleConfirm: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}
type HeaderProps = User & Props;

const Header: React.FC<HeaderProps> = ({
  firstName,
  lastName,
  avatar,
  notifications,
  isNotificationsOpen,
  isFilterOpen,
  handleNotificationsOpen,
  handleFilterOpen,
  handleNotificationsClose,
  handleFilterClose,
  handleConfirm,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <LayoutHeader container>
    <BrandLogoLink to={PATHS.profile}>
      <BrandLogo alt=":iTechArt" src={brandLogo} />
    </BrandLogoLink>
    <HeaderContent>
      <Search
        className="search"
        disableUnderline
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" fontSize="medium" />
          </InputAdornment>
        }
      />
      <ClickAwayListener onClickAway={handleNotificationsClose}>
        <RelativeWrapper>
          <NotificationsButton onClick={handleNotificationsOpen}>
            <img alt="notifications" src={alertIcon} />
          </NotificationsButton>
          {isNotificationsOpen && <NotificationsBar notifications={notifications} />}
        </RelativeWrapper>
      </ClickAwayListener>
      <ClickAwayListener onClickAway={handleFilterClose}>
        <RelativeWrapper>
          <FilterButton onClick={handleFilterOpen}>
            <img alt="filter" src={filterIcon} />
          </FilterButton>
          {isFilterOpen && (
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
          )}
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