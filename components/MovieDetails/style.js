import styled from 'styled-components';
import { breakpoint } from '../../styles/constants/breakpoints';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;

  ${breakpoint('md')} {
    flex-direction: row;
  }
`;

export const MovieContentTitle = styled.h2``;

export const MovieOverview = styled.dl`
  flex-basis: 100%;
  margin-top: 20px;

  ${breakpoint('md')} {
    flex-basis: 50%;
  }

  ${breakpoint('lg')} {
    flex-basis: 60%;
  }
`;

export const MovieInfoTitle = styled.dt`
  font-weight: bold;
`;

export const MovieInfo = styled.dd`
  margin-bottom: 24px;
`;

export const MovieCredits = styled.div`
  flex-basis: 100%;
  margin-top: 20px;

  ${breakpoint('md')} {
    margin-left: 40px;
    flex-basis: calc(50% - 40px);
  }

  ${breakpoint('lg')} {
    flex-basis: calc(40% - 40px);
  }
`;

export const MovieCreditsList = styled.ul`
`;

export const MovieCreditsItem = styled.li`
  margin-bottom: 8px;

  small {
    opacity: 0.7;
  }
`;

export const MoviePoster = styled.img`
  display: block;
  height: 250px;
  max-width: 100%;
  margin-top: 8px;
  border-radius: 8px;
`;
