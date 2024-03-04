import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technologie, index) => (
          <span key={`${id}-${index}`}>{technologie}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;