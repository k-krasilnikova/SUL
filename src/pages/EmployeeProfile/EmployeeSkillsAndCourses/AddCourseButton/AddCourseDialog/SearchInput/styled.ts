import styled from 'styled-components';

import SearchInput from 'components/SearchInput';

export const RelativeWrapper = styled('div')({
  position: 'relative',
  marginBottom: '16px',
});

export const StyledSearchInput = styled(SearchInput)({
  width: '100%',
});

export const NoContentText = styled('div')({
  position: 'absolute',
  zIndex: '10',
  background: '#fff',
  borderRadius: '6px',
  left: '24px',
  boxShadow: '0px 4px 4px 0 #00000040',
  padding: '8px',
});
