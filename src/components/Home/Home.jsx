import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from 'utils/fetchMovies';
import { ListItem } from './Home.styled';

export function Home() {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      const trendMovies = await getTrendMovies();
      setTrends([...trendMovies]);
    }
    getMovies();
  }, []);

  return (
    <>
      {trends.map(({ title, id }) => {
        return (
          <ListItem key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </ListItem>
        );
      })}
    </>
  );
}
