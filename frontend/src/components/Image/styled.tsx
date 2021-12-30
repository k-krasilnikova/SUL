import styled from 'styled-components';

interface SizeProps {
  width: number;
  height: number;
}

export const ImageContainer = styled('div')(({ width, height }: SizeProps) => ({
  overflow: 'hidden',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '5px',
  float: 'left',
  width: width ? width + 'px' : '150px',
  height: height ? height + 'px' : '100px',
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
