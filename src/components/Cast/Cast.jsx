import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/fetchMovies';

export function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const { cast } = await getMovieCast(movieId);
      console.log(cast);
      setActors([...cast]);
    }
    getCast();
  }, [movieId]);
  return (
    <ul>
      {actors.map(({ character, name, profile_path, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt="poster"
          />
          <h3>{name}</h3>
          <p>
            <b>Character: </b>
            <span>{character}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
