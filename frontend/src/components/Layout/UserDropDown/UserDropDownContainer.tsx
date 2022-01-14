import React, { useState } from 'react';
import DropDown from 'components/Layout/UserDropDown/UserDropDown';
import { User } from 'types/user';

const UserDropDown: React.FC<User> = ({
  firstName,
  lastName,
  role,
  unit,
  department,
  group,
  avatar,
}) => {
  const [isDropdownOpen, setDropdownState] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const openUserInfo = (event: React.MouseEvent<HTMLElement>) => {
    setDropdownState((currentState) => !currentState);
    setAnchorEl(event.currentTarget);
  };
  return (
    <DropDown
      firstName={firstName}
      lastName={lastName}
      role={role}
      unit={unit}
      department={department}
      group={group}
      avatar={avatar}
      isOpen={isDropdownOpen}
      onClick={openUserInfo}
      anchorEl={anchorEl}
    />
  );
};
export default UserDropDown;
