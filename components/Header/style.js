import styled from 'styled-components';
import Container from '../Container';

export const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const HeaderTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 40px;
  font-weight: bold;
`;

export const Nav = styled.nav``;

export const NavItem = styled.a`
  color: white;
  display: inline-block;
  padding: 8px;
  margin: 0 8px;
  text-decoration: none;
  border-bottom: 2px solid ${props => props.$active ? 'white' : 'transparent'}
`;
