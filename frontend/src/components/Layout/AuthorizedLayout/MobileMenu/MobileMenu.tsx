import { FC } from 'react';
import { Slide } from '@mui/material';

import Avatar from 'components/Avatar';
import { logOutIcon } from 'icons/mobileMenuIcons';
import { PATHS } from 'constants/routes';
import { Size } from 'enums/sizes';
import { IMenuMobileProps } from 'components/Layout/types';

import Menu from '../Menu';

import {
  MobileMenuSlide,
  MobileMenuBackdrop,
  MobileUserBlock,
  UserProfile,
  AvatarWrapper,
  UserNameWrapper,
  UserName,
  SpaceHolder,
  LogOut,
} from './styled';

const MobileMenu: FC<IMenuMobileProps> = ({
  userInfo,
  isShowMenu,
  handleConfirmLogOutOpen,
  handleSpaceHolderClick,
  toggleMobileMenu,
}) => {
  const { avatar, firstName, lastName } = userInfo || {};

  return (
    <MobileMenuBackdrop open={isShowMenu} onClick={toggleMobileMenu}>
      <Slide direction="left" in={isShowMenu} appear={false} mountOnEnter unmountOnExit>
        <MobileMenuSlide>
          <Menu isMobileVersion />
          <SpaceHolder onClick={handleSpaceHolderClick} />
          <MobileUserBlock>
            <UserProfile to={PATHS.profile}>
              <AvatarWrapper>
                <Avatar size={Size.xsmall} avatar={avatar} />
              </AvatarWrapper>
              <UserNameWrapper>
                <UserName>{firstName}</UserName>
                <UserName>{lastName}</UserName>
              </UserNameWrapper>
            </UserProfile>
            <LogOut onClick={handleConfirmLogOutOpen}>
              <img alt="log_out" src={logOutIcon} />
            </LogOut>
          </MobileUserBlock>
        </MobileMenuSlide>
      </Slide>
    </MobileMenuBackdrop>
  );
};

export default MobileMenu;
