import styled from 'styled-components';

const LAYOUT_BORDER = '2px solid #f0f2f7';
const LAYOUT_FONT = "'Lato', sans-serif";
const MENU_BACKGROUND = '#ffffff';
const MENU_FONT_COLOR = '#000000';
const BRAND_COLOR = '#eb1a2a';

export const LayoutHeader = styled.div`
  width: 100vw;
  background-color: ${MENU_BACKGROUND};
  border-bottom: ${LAYOUT_BORDER};
  font-family: ${LAYOUT_FONT};
  a {
    text-decoration: none;
  }
`;
export const BrandLogo = styled.div`
  display: block;
  height: 68px;
  width: 300px;
  font-size: 28px;
  padding: 20px 55px 20px 60px;
  border-right: ${LAYOUT_BORDER};
  color: ${BRAND_COLOR};
`;
export const MenuTabs = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${MENU_BACKGROUND};
  border-right: ${LAYOUT_BORDER};
  font-size: 24px;
  font-family: ${LAYOUT_FONT};
  margin: 0px;
  padding-top: 20px;
  a {
    text-decoration: none;
  }
`;
export const MenuTab = styled.div`
  display: flex;
  height: 60px;
  padding: 14px 20px 18px 20px;
  border-left: 3px solid ${MENU_BACKGROUND};
  color: ${MENU_FONT_COLOR};
  &:hover {
    color: ${BRAND_COLOR};
    border-left: 3px solid ${BRAND_COLOR};
  }
`;
export const MenuTabName = styled.span`
  display: inline-block;
  height: 24px;
  padding: 4px 0px 0px 8px;
`;
