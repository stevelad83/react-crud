import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();

  const handleClick = async () => {
    await signOut();
    setUser(null);
  };
  return (
    <header>
      <h2>Bulletin Board</h2>
      {user && (
        <>
          <div>Hello {user.email}</div>
          <button onClick={handleClick}>Sign Out</button>
          <Link to="/posts/new">New Post</Link>
        </>
      )}
    </header>
  );
}
