import styled from 'styled-components';
import Container from '../Container';
import { breakpoint } from '../../styles/constants/breakpoints';

export const HeaderWrapper = styled(Container)`
  display: flex;
  z-index: 99;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  position: relative;

  ${breakpoint('md')} {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

export const HeaderTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 32px;
  font-weight: bold;
`;

export const ToggleButton = styled.button`
  background: none;
  border: 1px solid white;
  border-radius: 4px;
  padding: 4px 8px;

  ${breakpoint('md')} {
    display: none;
  }
`;

export const ToggleButtonIcon = styled.span`
  display: block;
  margin: 4px 0;
  width: 20px;
  height: 2px;
  background: white;
  border: 0;
`;

type NavProps = {
  $open?: boolean;
};

export const Nav = styled.nav<NavProps>`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  max-height: ${props => props.$open ? '350px': '0'};
  background-color: black;
  transition: max-height 0.3s ease;

  ${breakpoint('md')} {
    display: block;
    position: relative;
    width: auto;
    max-height: unset;
  }
`;

type NavItemProps = {
  $active?: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  color: white;
  display: inline-block;
  padding: 8px;
  margin: 0 8px;
  text-decoration: none;
  border-bottom: 2px solid ${props => props.$active ? 'white' : 'transparent'}
`;
