import { useOutletContext } from 'react-router-dom';

export const Reviews = () => {
  const movie = useOutletContext();
  console.log(movie.reviews.results);
  return movie.reviews.results.length !== 0 ? (
    <div>
      <ul>
        {movie.reviews.results.map(r => (
          <li key={r.id}>
            <h4>{r.author}</h4>
            <p>{r.content}</p>
            <p>{r.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h4>There is no reviews yet</h4>
  );
};
