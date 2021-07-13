import styled from 'styled-components';
import Button from '../components/Button';

export const NavigationWrapper = styled.div`
  text-align: center;
  padding: 32px 0;
`;

export const NavigationButton = styled(Button)`
  font-size: 20px;
  padding: 16px;

  &[disabled] {
    pointer-events: none;
    opacity: 0.2;
  }
`;

export const GifHolder = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url("${props => props.$background}");
  background-size: cover;
  background-position: center;
`;

export const CageGif = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background-color: rgba(0,0,0,0.5);
`;

export const BackButton = styled(Button)`
  z-index: 2;
  position: fixed;
  top: 8px;
  left: 8px;
`;
