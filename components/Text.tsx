import styled from 'styled-components';

type TextProps = {
  $weight?: string;
  $align?: string;
};

const Text = styled.p<TextProps>`
  font-size: 16px;
  font-weight: ${props => props.$weight || 'normal' };
  text-align: ${props => props.$align || 'left' };
`;

export default Text;
