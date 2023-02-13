import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleClick = async () => {
    await signOut();
    setUser(null);
    history.push('./auth');
  };
  return (
    <header>
      <h2>Bulletin Board</h2>
      {user && (
        <>
          <div>Hello {user.email}</div>

          <Link to="/posts/new">New Post</Link>
          <button onClick={handleClick}>Sign Out</button>
        </>
      )}
    </header>
  );
}
