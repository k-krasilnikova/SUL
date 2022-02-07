import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText } from '@mui/material';
import Slide from '@mui/material/Slide';

import { IMenuProps } from 'types/menu';
import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { PATHS } from 'constants/routes';
import { logOutIcon } from 'icons/mobileMenuIcons';

import {
  MobileMenuSlide,
  MenuTabs,
  MenuTabsWrapper,
  TabWrapper,
  MobileMenuBackdrop,
  MobileUserBlock,
  UserProfile,
  AvatarWrapper,
  UserNameWrapper,
  UserName,
  SpaceHolder,
  LogOut,
} from './styled';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleConfirm: () => void;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

type Props = MobileMenuProps & IMenuProps;

const MobileMenu: React.FC<Props> = ({
  menuList,
  menuItem,
  classes,
  isMobileMenuOpen,
  toggleMobileMenu,
  firstName,
  lastName,
  avatar,
  handleConfirm,
}) => (
  <MobileMenuBackdrop open={isMobileMenuOpen} onClick={toggleMobileMenu}>
    <Slide direction="left" in={isMobileMenuOpen} appear={false} mountOnEnter unmountOnExit>
      <MobileMenuSlide>
        <MenuTabs>
          <MenuTabsWrapper>
            {menuList.map((item) =>
              menuItem === item.path ? (
                <TabWrapper
                  id={item.path}
                  key={item.title}
                  component={Link}
                  classes={{ root: classes.selected }}
                  to={item.path}
                >
                  <ListItemIcon classes={{ root: classes.selectedLogo }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{ variant: 'h6' }}
                    classes={{ root: classes.selectedText }}
                  />
                </TabWrapper>
              ) : (
                <TabWrapper
                  id={item.path}
                  key={item.title}
                  component={Link}
                  classes={{ root: classes.default }}
                  to={item.path}
                >
                  <ListItemIcon classes={{ root: classes.default }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{ variant: 'h6' }}
                    classes={{ root: classes.default }}
                  />
                </TabWrapper>
              ),
            )}
          </MenuTabsWrapper>
        </MenuTabs>
        <SpaceHolder
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <MobileUserBlock>
          <UserProfile to={PATHS.profile}>
            <AvatarWrapper>
              <UserAvatar size={SIZE.small} avatar={avatar} />
            </AvatarWrapper>
            <UserNameWrapper>
              <UserName>{firstName}</UserName>
              <UserName>{lastName}</UserName>
            </UserNameWrapper>
          </UserProfile>
          <LogOut onClick={handleConfirm}>
            <img alt="log_out" src={logOutIcon} />
          </LogOut>
        </MobileUserBlock>
      </MobileMenuSlide>
    </Slide>
  </MobileMenuBackdrop>
);

export default MobileMenu;
