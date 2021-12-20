import React from 'react';
import { Popper, Box, List, ListItem, ListItemText } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  UserInfo,
  UserAvatar,
  UserName,
  UserPopper,
  ArrowDown,
  ArrowUp,
  DividerHorizontal,
  Link
} from './styled'

interface Props {
  user?: {
    role?: string,
    unit?: string,
    department?: string,
    group?: string
  };
  avatarUrl?: string;
  userName?: string;
  open: boolean; 
  onClick: (event: any) => void;
  anchorEl: HTMLElement | null;
}

const UserDropDown: React.FC<Props> = ({ user, avatarUrl, userName, open, onClick, anchorEl }) => (
  <Box>
    <UserInfo onClick={(event: any) => onClick(event)} > 
      <UserAvatar src={avatarUrl} />
      <UserName> 
        {userName}
      </UserName>
      {open ? (<ArrowUp/>) : (<ArrowDown/>)}
    </UserInfo>
    <Popper open={open} anchorEl={anchorEl}>
      <UserPopper>
        <FormControlLabel control={<Switch />} label="Autopass" />
        <DividerHorizontal />
        <List>
          <ListItem disablePadding>
              <ListItemText primary={"Role: " + user?.role} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary={"Unit: " + user?.unit} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary={"Department: " + user?.department} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary={"Group: " + user?.group} />
          </ListItem>
        </List>
        <DividerHorizontal />
        <Link href="#">Delegation <ArrowForwardIcon fontSize="small" /></Link>
      </UserPopper>
    </Popper>
  </Box>
);

export default UserDropDown;