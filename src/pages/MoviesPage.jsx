import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Movies } from 'components/Movies/Movies';
import { getMovieDetails, getMoviesBySearch } from 'utils/fetchMovies';

export function MoviesPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

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
    setQuery(searchQuery);
  }

  // console.log(getMovieDetails(12593));

  return (
    <>
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
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
