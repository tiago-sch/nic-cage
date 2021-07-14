import styled from 'styled-components';
import { breakpoint } from './constants/breakpoints';

export const Banner = styled.div`
  background: #333 ${props => props.$background && `url(${props.$background}) no-repeat top center`};
  background-size: cover;
  height: 200px;
  border-radius: 8px;
  position: relative;


  ${breakpoint('md')} {
    height: 300px;
  }

  ${breakpoint('lg')} {
    height: 450px;
  }

  &:before {
    content: '';
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.7;
    z-index: 0;
  }
`;

export const BannerContainer = styled.div`
  z-index: 1;
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const BannerTitle = styled.h1`
  margin: 0;

  small {
    color: #ccc;
  }
`;

export const BannerTagline = styled.p`
  font-size: 18px;
  margin: 16px 0 0;
`

export const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MovieContentTitle = styled.h2``;

export const MovieOverview = styled.dl`
  flex-basis: 60%;
`;

export const MovieInfoTitle = styled.dt`
  font-weight: bold;
`;

export const MovieInfo = styled.dd`
  margin-bottom: 16px;
`;

export const MovieCredits = styled.div`
  flex-basis: calc(40% - 40px);
  margin-left: 40px;
`;

export const MovieCreditsList = styled.ul`
`;

export const MovieCreditsItem = styled.li`
  margin-bottom: 8px;

  small {
    opacity: 0.7;
  }
`;
