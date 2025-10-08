import { findIndex } from "lodash"

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
    <div className="w-full lg:w-150 xl:w-200 grow">

      <div className="tabs tabs-lift">
        <input type="radio" name="cast-crew-accordion" className="tab" aria-label="Cast" defaultChecked />
        <div className="tab-content border-base-300 bg-base-100 p-3">
          <ul className="list">
            {cast.map(({ id, name, character }) => (
              <li className="list-row" key={`cast-${id}`}>
                <div>
                  <div>{name}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">{character || "TBA"}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <input type="radio" name="cast-crew-accordion" className="tab" aria-label="Crew" />
        <div className="tab-content border-base-300 bg-base-100 p-3">
          <ul className="list">
            {reducedCrew.map(({ id, name, jobs }) => (
              <li className="list-row" key={`crew-${id}`}>
                <div>
                  <div>{name}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">{jobs.join(", ")}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieCastCrew
