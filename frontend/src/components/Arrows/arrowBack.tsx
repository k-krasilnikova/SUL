import React from 'react';

interface Props {
  arrowDisabled?: boolean;
}

const arrowBack: React.FC<Props> = ({ arrowDisabled }) => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1L1 9L9 17" stroke={arrowDisabled ? '#b6b6bf' : '#131313'} />
  </svg>
);

export default arrowBack;
