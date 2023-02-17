import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { usePosts } from '../hooks/usePosts.js';
import PostCard from './PostCard.js';

export default function Posts() {
  const { loading, error, posts, setPosts } = usePosts();

  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth" />;
  }
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <PostCard
          className={post.id % 2 ? 'tilt' : ''}
          key={post.id}
          {...post}
          posts={posts}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
}
