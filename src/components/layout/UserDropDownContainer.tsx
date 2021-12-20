import React from 'react';
import UserDropDown from './UserDropDown'

interface Props {
  user?: {
    role?: string,
    unit?: string,
    department?: string,
    group?: string
  };
  avatarUrl?: string;
  userName?: string;
}

const UserDropDownContainer: React.FC<Props> = ({ user, avatarUrl, userName }) => {

  const [open, setUserOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const openUserInfo = (event: any) => {
    const currentState = open;
    setUserOpen(!currentState);
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <UserDropDown 
      user={user} 
      avatarUrl={avatarUrl} 
      userName={userName} 
      open={open} 
      onClick={openUserInfo} 
      anchorEl={anchorEl} 
    /> 
  );
}

export default UserDropDownContainer;