import { useOutletContext } from 'react-router-dom';

export const Reviews = () => {
  const movie = useOutletContext();
  return (
    <div>
      <h1>reviews</h1>
      <ul>
        {movie.reviews.results.map(r => (
          <li key={r.id}>
            <h5>{r.author}</h5>
            <p>{r.content}</p>
            <p>{r.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
