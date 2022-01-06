import styled from 'styled-components';

import { SIZE } from 'constants/sizes';

interface Size {
  size?: string;
}

export const ImageContainer = styled('div')<Size>(({ size }) => ({
  overflow: 'hidden',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '5px',
  float: 'left',
  width: '150px',
  height: '100px',
  ...(size === SIZE.large && {
    width: '450px',
    height: '300px',
  }),
  ...(size === SIZE.medium && {
    width: '300px',
    height: '200px',
  }),
  ...(size === SIZE.small && {
    width: '150px',
    height: '100px',
  }),
}));
