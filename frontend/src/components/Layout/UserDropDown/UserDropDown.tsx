import React from 'react';
import { Popper, Box, List, ListItem, ListItemText } from '@mui/material';
import Switch from '@mui/material/Switch';

import FormControlLabel from '@mui/material/FormControlLabel';
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
  firstName,
  lastName,
  role,
  unit,
  department,
  group,
  avatar,
  isOpen,
  onClick,
  anchorEl,
}) => (
  <Box>
    <UserInfo onClick={onClick}>
      <UserAvatar avatar={avatar} size="small" />
      <UserName>
        {firstName} {lastName}
      </UserName>
      {isOpen ? <ArrowUp /> : <ArrowDown />}
    </UserInfo>
    <Popper open={isOpen} anchorEl={anchorEl}>
      <UserPopper>
        <FormControlLabel control={<Switch />} label="Autopass" />
        <DividerHorizontal />
        <List>
          <ListItem disablePadding>
            <ListItemText primary={`Role: ${role}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Unit: ${unit}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Department: ${department}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Group: ${group}`} />
          </ListItem>
        </List>
        <DividerHorizontal />
        <Link href="#emplty-link">
          Delegation <ArrowForwardIcon fontSize="small" />
        </Link>
      </UserPopper>
    </Popper>
  </Box>
);
export default DropDown;
