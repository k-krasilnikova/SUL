import React from 'react';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AccordionSummary, AccordionDetails, Typography, ClickAwayListener } from '@mui/material';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { Notification } from 'types/notification';
import { Course } from 'types/course';
import { UserAvatar } from 'components/Avatar';
import NotificationsBar from 'components/NotificationsBar';
import { alertIcon, filterIcon, logOutIcon, menuMobileIcon } from 'icons';
import { brandLogo } from 'images';
import SearchResult from './SearchResult';

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
  isNotificationsOpen: boolean;
  isFilterOpen: boolean;
  handleNotificationsOpen: () => void;
  handleFilterOpen: () => void;
  handleNotificationsClose: () => void;
  handleFilterClose: () => void;
  handleConfirm: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isSearchOpen: boolean;
  searchCourses: (courseName: string) => void;
  handleSearchClose: () => void;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  notifications?: Array<Notification>;
  coursesFound?: Array<Course>;
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
  isSearchOpen,
  searchCourses,
  handleSearchClose,
  coursesFound,
}) => (
  <LayoutHeader container>
    <BrandLogoLink to={PATHS.profile}>
      <BrandLogo alt=":iTechArt" src={brandLogo} />
    </BrandLogoLink>
    <HeaderContent>
      <ClickAwayListener onClickAway={handleSearchClose}>
        <RelativeWrapper>
          <Search
            className="search"
            disableUnderline
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon color="disabled" fontSize="medium" />
              </InputAdornment>
            }
            onChange={(event) => searchCourses(event.target.value)}
          />
          {isSearchOpen && coursesFound && <SearchResult coursesFound={coursesFound} />}
        </RelativeWrapper>
      </ClickAwayListener>
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
