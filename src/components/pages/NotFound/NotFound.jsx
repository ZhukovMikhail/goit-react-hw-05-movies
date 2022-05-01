import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>
        Page not found<Link to="/">, go to homepage</Link>
      </h1>
    </div>
  );
};
