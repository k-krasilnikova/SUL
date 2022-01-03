import styled from 'styled-components';

interface SizeProps {
  width: number;
  height: number;
}

export const ImageContainer = styled('div')<SizeProps>(({ width, height }) => ({
  overflow: 'hidden',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '5px',
  float: 'left',
  width: '150px',
  height: '100px',
  ...(width && {
    width: `${width}px`,
  }),
  ...(height && {
    height: `${height}px`,
  }),
}));

/*export const ImageContainer = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width} px;
  height: ${(props) => props.height} px;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
  margin: 5px;
  float: left;
`;*/
