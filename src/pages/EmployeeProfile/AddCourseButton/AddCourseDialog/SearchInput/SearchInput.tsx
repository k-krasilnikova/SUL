import { FC, BaseSyntheticEvent } from 'react';

import { RelativeWrapper, StyledSearchInput, NoContentText } from './styled';

interface IProps {
  isNoResult: boolean;
  value: string;
  handleChange: (event: BaseSyntheticEvent) => void;
}

const SearchInput: FC<IProps> = ({ isNoResult, value, handleChange }) => (
  <RelativeWrapper>
    <StyledSearchInput onChange={handleChange} value={value} />
    {isNoResult && <NoContentText>No result</NoContentText>}
  </RelativeWrapper>
);

export default SearchInput;
