import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/fetchMovies';

export function Cast() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function getCast() {
      const { cast } = await getMovieCast(movieId);
      setActors([...cast]);
    }
    getCast();
  }, []);
  const { movieId } = useParams();
  return (
    <ul>
      {actors.map(({ character, name, profile_path, id }) => (
        <li key={id}>
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
