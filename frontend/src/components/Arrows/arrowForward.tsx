import React from 'react';

interface Props {
  arrowDisabled?: boolean;
}

const arrowForward: React.FC<Props> = ({ arrowDisabled }) => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 17L9 9L1 0.999999" stroke={arrowDisabled ? '#b6b6bf' : '#131313'} />
  </svg>
);

export default arrowForward;
