import React from 'react';
import './MyCatsComponent.css';

const MyCatsComponent = ({ post }) => {
  return (
    <article className="post">
      <img src={post.url} alt="post" className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{post.title} <span className="post-date">{post.date}</span></h2>
        
        <p className="post-text">{post.text}</p>
      </div>
    </article>
  );
};

export default MyCatsComponent;