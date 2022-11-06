import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'utils/fetchMovies';
import { Input, SearchBtn, Form, ListItem } from './MoviesPage.styled';

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
      <Form onSubmit={onSearch}>
        <Input
          name="query"
          type="text"
          placeholder="Enter name of movie"
          required
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
      {query && (
        <ul>
          {searchResults.map(({ title, id }) => (
            <ListItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
}
