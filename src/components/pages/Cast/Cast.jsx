import * as Api from 'service/api';
import { useOutletContext } from 'react-router-dom';

export const Cast = () => {
  const movie = useOutletContext();
  return (
    <div>
      <h1>Cast</h1>
      <ul>
        {movie.credits.cast.map(a => (
          <li key={a.id}>
            <h5>{a.name}</h5>
            <img
              src={`${Api.IMG_BASE_URL}${Api.IMG_W200}${a.profile_path}`}
              alt={a.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
