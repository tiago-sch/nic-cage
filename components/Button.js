import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.$color || 'white'};
  color: ${props => props.$background || 'black'};
  font-size: ${props => props.$fontSize || '16px'};
  font-weight: bold;
  padding: 8px 16px;
  border: 0;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
`;

export default Button;
