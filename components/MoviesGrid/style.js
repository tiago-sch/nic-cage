import styled from 'styled-components'
import { breakpoint } from '../../styles/constants/breakpoints';

export const MoviesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
`;

export const MovieItem = styled.li`
  flex: 0 0 50%;
  ${props => props.$noPoster && `
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${breakpoint('md')} {
    flex-basis: 33.333333%;
  }

  ${breakpoint('lg')} {
    flex-basis: 25%;
  }
`;

export const MovieLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 16px;
  display: block;
  flex-grow: 1;
  transition: background 0.3s ease;
  border-radius: 8px;

  &:hover {
    background-color: #0c0c0c;
  }
`;

export const MoviePoster = styled.img`
  display: block;
  max-width: 100%;
  height: 175px;
  margin: 0 auto 32px;
  border-radius: 8px;
`;

export const MovieTitle = styled.h3`
  text-align: center;
  margin: 0;

  small {
    opacity: 0.7;
  }
`;

export const MoviePosition = styled.p`
  text-align: center;
  margin: 8px 0 0;
`;
