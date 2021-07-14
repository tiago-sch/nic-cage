import { findIndex } from 'lodash'
import {
  MovieContentTitle,
  MovieCredits,
  MovieCreditsList,
  MovieCreditsItem
} from './style'

const MovieCastCrew = ({ cast, crew }) => {
  const reducedCrew = crew.reduce((acc, cur) => {
    const { id, name, job } = cur;
    const includedIndex = findIndex(acc, item => item.id === id)

    if (includedIndex > -1) {
      acc[includedIndex].jobs.push(job)
    } else {
      acc.push({id, name, jobs: [ job ]})
    }

    return acc;
  }, []);

  return (
    <MovieCredits>
      <MovieContentTitle>Cast</MovieContentTitle>

      <MovieCreditsList>
        {cast.map(({ id, name, character }) => (
          <MovieCreditsItem key={`cast-${id}`}>
            {name} <small>({character})</small>
          </MovieCreditsItem>
        ))}
      </MovieCreditsList>

      <MovieContentTitle>Crew</MovieContentTitle>

      <MovieCreditsList>
        {reducedCrew.map(({ id, name, jobs }) => (
          <MovieCreditsItem key={`cast-${id}`}>
            {name} <small>({jobs.join(', ')})</small>
          </MovieCreditsItem>
        ))}
      </MovieCreditsList>
    </MovieCredits>
  )
}

export default MovieCastCrew
