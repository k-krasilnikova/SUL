import styled from 'styled-components';
import Grid from '@mui/material/Grid';

interface ILayoutTypes {
  isSqueeze?: boolean;
}

export const GridHeader = styled(Grid)({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: '10',
});

export const GridMenu = styled(Grid)<ILayoutTypes>(({ isSqueeze }) => ({
  width: '303px',
  ...(isSqueeze && {
    width: '129px',
  }),
}));

export const PageWrapper = styled(Grid)<ILayoutTypes>(({ isSqueeze }) => ({
  overflowY: 'auto',
  height: 'calc(100vh - 80px)',
  width: 'calc(100% - 303px)',
  ...(isSqueeze && {
    width: `calc(100% - 129px)`,
  }),
}));
