import React from 'react';
import { usePosts } from '../hooks/usePosts.js';
import './posts.css';

export default function Posts() {
  const { loading, error, posts } = usePosts();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      {posts.map((post) => (
        <p key={post.id} className="post-it">
          {(post.title, post.description)}
        </p>
      ))}
    </div>
  );
}
