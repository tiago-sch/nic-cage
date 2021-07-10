import styled from 'styled-components'

export const MasonryLink = styled.a`
  display: block;
  position: relative;
  margin: 4px 8px;
  transform: background 0.3s ease;
  cursos: pointer;

  &:hover {
    background: rgba(1,1,1,0.3);
  }
`;

export const MasonryImage = styled.img`
  display: block;
  width: 100%;
  position: absolute;
  z-index: 1;
`;
