import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { usePost } from '../hooks/usePost.js';
import { deletePost } from '../services/posts.js';
import './posts.css';

export default function PostCard({ title, posts, setPosts, description, user_id, id }) {
  const { user } = useUser();
  //   const history = useHistory();
  const owner = user.id === user_id;
  const { loading, error, setError } = usePost(id);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const handleClick = async () => {
    try {
      setPosts(posts.filter((post) => post.id !== id));
      await deletePost(id);
      //   history.push('/posts');
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {owner && (
        <>
          <p>
            <Link to={`/posts/edit/${id}`}>Edit </Link>
          </p>
          <button onClick={handleClick}>Delete</button>
        </>
      )}
    </div>
  );
}
