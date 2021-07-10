import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  text-align: center;
  padding: 32px 0;
`;

export const NavigationButton = styled.button`
  background: white;
  border: 0;
  border-radius: 8px;
  padding: 16px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

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

export const BackButton = styled.a`
  z-index: 2;
  background: white;
  color: black;
  font-weight: bold;
  position: fixed;
  top: 8px;
  left: 8px;
  padding: 8px 16px;
`;
