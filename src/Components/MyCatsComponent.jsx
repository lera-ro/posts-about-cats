import React from 'react';
import './MyCatsComponent.css';

const MyCatsComponent = ({ post }) => {
  return (
    <article className="post">
      <img src={post.url} alt={post.title} className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-date">{post.date}</div>
        <p className="post-text">{post.text}</p>
      </div>
    </article>
  );
};

export default MyCatsComponent;