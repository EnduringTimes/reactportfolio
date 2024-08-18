import React from 'react';

function Project({ title, img, link, repo }) {
  return (
    <div className="project">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <br />
      <a href={repo} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px', display: 'inline-block' }}>GitHub Repo</a>
    </div>
  );
}

export default Project;
