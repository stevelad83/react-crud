import React from 'react';
import './posts.css';

export default function PostCard({ title, description }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
