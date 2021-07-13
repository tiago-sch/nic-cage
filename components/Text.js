import styled from 'styled-components';

const Text = styled.p`
  font-size: 16px;
  font-weight: ${props => props.$weight || 'normal' };
  text-align: ${props => props.$align || 'left' };
`;

export default Text;
