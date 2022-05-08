import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { BiTimeFive, BiError } from 'react-icons/bi';

const NotFound = () => {
  const [time, setTime] = useState(5);

  let navigate = useNavigate();

  const ref = useRef(new Date().getTime() + 5000);

  const timerId = useRef(
    setInterval(() => {
      setTime(Math.ceil((ref.current - Date.now()) / 1000));
    }, 1000)
  );
  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerId.current);
      navigate('/main');
    }
  }, [navigate, time]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'wheat',
        padding: '50px',
        boxShadow: '2px 4px 8px 0px rgba(0,0,0,0.75)',
      }}
    >
      <p>
        <BiError /> Page not found,
        <Link to="/main" style={{ textDecoration: 'none' }}>
          {' '}
          go to homepage
        </Link>
        <BiError />
      </p>

      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <BiTimeFive />
        {/* {`Redirecting in ${time > 0 && time} seconds`} */}
        {`Redirecting in ${time} seconds`}
        <BiTimeFive />
      </p>
    </div>
  );
};
export default NotFound;
