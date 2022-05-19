import { FC } from 'react';

import Avatar from 'components/Avatar';
import Tooltip from 'components/Tooltip';
import { EmployeeRank, EmployeeContentType, EmployeeColumnName } from 'enums/employee';
import { Size } from 'enums/sizes';
import { IEmployeeContentProps } from 'pages/Employees/types';
import { convertToFullName } from 'utils/helpers/convertToFullName';

import {
  ContentWrapper,
  StackItem,
  UserInfo,
  UserName,
  ImageWrapper,
  InfoContainer,
  Position,
  StyledExpandMoreIcon,
  OverFlowedText,
} from './styled';
import { ColumnLabel } from '../styled';
import ContentGrid from '../ContentGrid';
import ContentColumn from '../ContentColumn';

const EmployeeContent: FC<IEmployeeContentProps> = ({
  type,
  employee,
  config,
  isVisible,
  handleUserInfoClick,
  handleShowButtonClick,
}) => {
  const { avatar, firstName, lastName, position } = employee;
  const userFullName = convertToFullName(firstName, lastName);
  const isContentVisible = isVisible || type !== EmployeeContentType.hidden;

  return (
    <ContentGrid contentType={type} isVisible={isContentVisible}>
      {config.map((columnName) => (
        <ContentColumn key={columnName} columnName={columnName} contentType={type}>
          {type === EmployeeContentType.hidden && <ColumnLabel>{columnName}</ColumnLabel>}
          <ContentWrapper>
            {columnName === EmployeeColumnName.empty ? (
              <UserInfo onClick={handleUserInfoClick}>
                <ImageWrapper>
                  <Avatar size={Size.subsmall} avatar={avatar} />
                </ImageWrapper>
                <InfoContainer>
                  <UserName>{userFullName}</UserName>
                  <Position>{position}</Position>
                </InfoContainer>
              </UserInfo>
            ) : columnName === EmployeeColumnName.rank ? (
              EmployeeRank[employee[columnName]]
            ) : columnName === EmployeeColumnName.stack ? (
              employee[columnName].map((stackItem) => (
                <StackItem key={stackItem.member.name}>{stackItem.member.name}</StackItem>
              ))
            ) : (columnName === EmployeeColumnName.phone ||
                columnName === EmployeeColumnName.skype) &&
              type !== EmployeeContentType.hidden ? (
              <Tooltip title={employee[columnName] as string}>
                <OverFlowedText>{employee[columnName]}</OverFlowedText>
              </Tooltip>
            ) : columnName === EmployeeColumnName.button ? (
              <StyledExpandMoreIcon isVisible={isVisible} onClick={handleShowButtonClick} />
            ) : (
              employee[columnName]
            )}
          </ContentWrapper>
        </ContentColumn>
      ))}
    </ContentGrid>
  );
};

export default EmployeeContent;
