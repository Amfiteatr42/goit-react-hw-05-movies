import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/fetchMovies';
import { Item, List, Portrait } from './Cast.styled';

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
    <List>
      {actors.map(({ character, name, profile_path, id }, idx) => {
        return idx < 12 ? (
          <Item key={id}>
            <Portrait
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt="poster"
            />
            <h3>{name}</h3>
            <p>
              <b>Character: </b>
              <span>{character}</span>
            </p>
          </Item>
        ) : null;
      })}
    </List>
  );
}
