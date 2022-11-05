import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'utils/fetchMovies';

export function MoviesPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (query === '') return;
    async function getMovies() {
      const results = await getMoviesBySearch(query);
      setSearchResults([...results]);
    }

    getMovies();
  }, [query]);

  function onSearch(e) {
    e.preventDefault();

    const searchQuery = e.target.elements.query.value;
    setSearchParams({ query: searchQuery });
  }

  return (
    <>
      <h2>Movie finder:</h2>
      <form onSubmit={onSearch}>
        <input
          name="query"
          type="text"
          placeholder="Enter name of movie"
          required
        />
        <button type="submit">Search</button>
      </form>
      {query && (
        <ul>
          {searchResults.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
