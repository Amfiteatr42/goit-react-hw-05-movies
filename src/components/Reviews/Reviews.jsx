import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/fetchMovies';
import { Author, RewiewText } from './Reviews.styled';

function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const response = await getMovieReviews(movieId);
      setReview([...response]);
    }
    getCast();
  }, [movieId]);

  if (!review) return;

  return (
    <>
      {!!review.length ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <Author>{author}</Author>
              <RewiewText>{content}</RewiewText>
            </li>
          ))}
        </ul>
      ) : (
        <div>There's no review added yet :(</div>
      )}
    </>
  );
}

export default Reviews;
