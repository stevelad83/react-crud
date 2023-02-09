import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { authUser } from '../services/auth.js';

export default function Auth() {
  //   const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useUser();

  const clickHandler = async () => {
    const userResp = await authUser(email, password);
    setUser(userResp);
    setEmail('');
    setPassword('');
  };

  if (user) {
    // console.log('user', user);
    return <Redirect to="/posts" />;
  }

  return (
    <div>
      <div className="form-controls">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}
