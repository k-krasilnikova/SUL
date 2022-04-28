import { FC } from 'react';
import { Accordion, AccordionDetails } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { USER_INFO_LABEL } from 'constants/userInfo';

import { StyledAccordionSummary, UserInfoList, UserName } from './styled';
import UserInfoItem from './UserInfoItem';
import CopyName from './CopyName';
import UserAvatar from '../UserAvatar';
import { IUserInfoProps } from '../types';

const UserInfo: FC<IUserInfoProps> = (userInfo) => {
  const { avatar, firstName, lastName } = userInfo;
  const userFullName = `${firstName} ${lastName}`;
  const sortedUserInfoEntries = Object.entries(userInfo)?.sort(
    ([currentInfoLabel], [nextInfoLabel]) =>
      USER_INFO_LABEL[currentInfoLabel]?.order - USER_INFO_LABEL[nextInfoLabel]?.order,
  );

  return (
    <Accordion defaultExpanded>
      <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <UserAvatar isFromAccordion avatar={avatar} />
        <UserName>{userFullName}</UserName>
        <CopyName userName={userFullName} />
      </StyledAccordionSummary>
      <AccordionDetails>
        <UserInfoList>
          {sortedUserInfoEntries.map(
            ([infoLabel, infoText]) =>
              USER_INFO_LABEL[infoLabel] && (
                <UserInfoItem key={infoLabel} infoLabel={infoLabel} infoText={infoText} />
              ),
          )}
        </UserInfoList>
      </AccordionDetails>
    </Accordion>
  );
};

export default UserInfo;
