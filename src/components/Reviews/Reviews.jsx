import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/fetchMovies';

export function Reviews() {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const response = await getMovieReviews(movieId);
      setReview([...response]);
    }
    getCast();
  }, [movieId]);

  return (
    <ul>
      {!!review.length ? (
        review.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <div>There's no review for this movie yet</div>
      )}
    </ul>
  );
}
