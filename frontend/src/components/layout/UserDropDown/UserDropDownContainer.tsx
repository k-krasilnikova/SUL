import React from 'react';

import DropDown from 'components/Layout/UserDropDown/UserDropDown';
import { User } from 'types/user';

const UserDropDown: React.FC<User> = ({
  userName,
  userRole,
  userUnit,
  userDepartment,
  userGroup,
  avatarUrl,
}) => {
  const [isDropdownOpen, setDropdownState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const openUserInfo = (event: React.MouseEvent<HTMLElement>) => {
    setDropdownState((currentState) => !currentState);
    setAnchorEl(event.currentTarget);
  };

  return (
    <DropDown
      userName={userName}
      userRole={userRole}
      userUnit={userUnit}
      userDepartment={userDepartment}
      userGroup={userGroup}
      avatarUrl={avatarUrl}
      isOpen={isDropdownOpen}
      onClick={openUserInfo}
      anchorEl={anchorEl}
    />
  );
};

export default UserDropDown;
