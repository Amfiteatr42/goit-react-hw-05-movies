import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendMovies } from 'utils/fetchMovies';

export function Home() {
  const [trends, setTrends] = useState([]);
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
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </>
  );
}
