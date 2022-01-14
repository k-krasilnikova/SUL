import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Popper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { UserAvatar } from 'components/Avatar';
import { alertIcon, filterIcon, logOutIcon } from 'icons';

import {
  LayoutHeader,
  SpaceHolder,
  BrandLogo,
  BrandLogoBlack,
  HeaderContent,
  Search,
  NotificationsButton,
  FilterButton,
  Notifications,
  Filter,
  UserBlock,
  UserName,
  LogOut,
} from './styled';

interface Props {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  openNotifications: boolean;
  openFilter: boolean;
  anchorElNotifications: HTMLElement | null;
  anchorElFilter: HTMLElement | null;
  handleNotificationsOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleFilterOpen: (event: React.MouseEvent<HTMLElement>) => void;
}
type HeaderProps = User & Props;

const Header: React.FC<HeaderProps> = ({
  firstName,
  lastName,
  avatar,
  openNotifications,
  openFilter,
  anchorElNotifications,
  anchorElFilter,
  handleNotificationsOpen,
  handleFilterOpen,
}) => {
  return (
    <LayoutHeader container>
      <NavLink to={PATHS.home}>
        <BrandLogo>
          :i<BrandLogoBlack>Tech</BrandLogoBlack>Art
        </BrandLogo>
      </NavLink>
      <HeaderContent>
        <Search
          disableUnderline={true}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="disabled" />
            </InputAdornment>
          }
        />
        <NotificationsButton onClick={handleNotificationsOpen}>
          <img src={alertIcon} />
        </NotificationsButton>
        <Popper open={openNotifications} anchorEl={anchorElNotifications}>
          <Notifications>Notifications here</Notifications>
        </Popper>
        <FilterButton onClick={handleFilterOpen}>
          <img src={filterIcon} />
        </FilterButton>
        <Popper open={openFilter} anchorEl={anchorElFilter}>
          <Filter>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Status</Typography>
              </AccordionSummary>
              <AccordionDetails>Statuses here</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Technology</Typography>
              </AccordionSummary>
              <AccordionDetails>Technologies here</AccordionDetails>
            </Accordion>
          </Filter>
        </Popper>
        <SpaceHolder />
        <NavLink to={PATHS.profile}>
          <UserBlock>
            <UserAvatar avatar={avatar} size="small" />
            <UserName>{`${firstName} ${lastName}`}</UserName>
          </UserBlock>
        </NavLink>
        <LogOut>
          <img src={logOutIcon} />
        </LogOut>
      </HeaderContent>
    </LayoutHeader>
  );
};
export default Header;
