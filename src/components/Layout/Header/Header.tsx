import React from 'react';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AccordionSummary, AccordionDetails, Typography, Menu } from '@mui/material';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { UserAvatar } from 'components/Avatar';
import Logo from 'components/BrandLogo';
import { alertIcon, filterIcon, logOutIcon } from 'icons';

import {
  LayoutHeader,
  SpaceHolder,
  BrandLogoLink,
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
} from './styled';

interface Props {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  isNotificationsOpen: boolean;
  isFilterOpen: boolean;
  notificationsAnchor: HTMLElement | null;
  filterAnchor: HTMLElement | null;
  handleNotificationsOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleFilterOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleNotificationsClose: () => void;
  handleFilterClose: () => void;
}
type HeaderProps = User & Props;

const Header: React.FC<HeaderProps> = ({
  firstName,
  lastName,
  avatar,
  isNotificationsOpen,
  isFilterOpen,
  notificationsAnchor,
  filterAnchor,
  handleNotificationsOpen,
  handleFilterOpen,
  handleNotificationsClose,
  handleFilterClose,
}) => {
  return (
    <LayoutHeader container>
      <BrandLogoLink to={PATHS.profile}>
        <Logo />
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
        />
        <NotificationsButton onClick={handleNotificationsOpen}>
          <img alt="notifications" src={alertIcon} />
        </NotificationsButton>
        <Menu
          open={isNotificationsOpen}
          anchorEl={notificationsAnchor}
          onClose={handleNotificationsClose}
        >
          <Notifications>Notifications here</Notifications>
        </Menu>
        <FilterButton onClick={handleFilterOpen}>
          <img alt="filter" src={filterIcon} />
        </FilterButton>
        <Menu open={isFilterOpen} anchorEl={filterAnchor} onClose={handleFilterClose}>
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
        </Menu>
        <SpaceHolder />
        <UserBlock to={PATHS.profile}>
          <UserAvatar avatar={avatar} size="small" />
          <UserName>{`${firstName} ${lastName}`}</UserName>
        </UserBlock>
        <LogOut>
          <img alt="log_out" src={logOutIcon} />
        </LogOut>
      </HeaderContent>
    </LayoutHeader>
  );
};
export default Header;
