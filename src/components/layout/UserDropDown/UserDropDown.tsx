import React from 'react';
import { Popper, Box, List, ListItem, ListItemText } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  UserInfo,
  UserName,
  UserPopper,
  ArrowDown,
  ArrowUp,
  DividerHorizontal,
  Link,
} from 'components/Layout/UserDropDown/styled';
import { User } from 'types/user';
import { UserAvatar } from 'components/Avatar';

interface PopperControl {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
}

type Props = User & PopperControl;

const DropDown: React.FC<Props> = ({
  userName,
  userRole,
  userUnit,
  userDepartment,
  userGroup,
  avatarUrl,
  isOpen,
  onClick,
  anchorEl,
}) => (
  <Box>
    <UserInfo onClick={onClick}>
      <UserAvatar avatarUrl={avatarUrl} size="small" />
      <UserName>{userName}</UserName>
      {isOpen ? <ArrowUp /> : <ArrowDown />}
    </UserInfo>
    <Popper open={isOpen} anchorEl={anchorEl}>
      <UserPopper>
        <FormControlLabel control={<Switch />} label="Autopass" />
        <DividerHorizontal />
        <List>
          <ListItem disablePadding>
            <ListItemText primary={`Role: ${userRole}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Unit: ${userUnit}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Department: ${userDepartment}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Group: ${userGroup}`} />
          </ListItem>
        </List>
        <DividerHorizontal />
        <Link href="#">
          Delegation <ArrowForwardIcon fontSize="small" />
        </Link>
      </UserPopper>
    </Popper>
  </Box>
);

export default DropDown;
