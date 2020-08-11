import React from 'react';
import '../css/overview.styl';

const ProjectOverview = ({ project }) => {
  const { projectName, projectUrl, projectDescription, date } = project;

  return (
    <div className="overview">
      <div className="title">
        <span
          className="highlight-text"
          style={{ color: 'var(--primary-color)' }}
        >
          {projectName}{' '}
          <a
            className="project-url"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--secondary-color)' }}
          >
            View here &rarr;
          </a>
        </span>
      </div>
      <div className="description" style={{ color: 'var(--secondary-color)' }}>
        {projectDescription}
      </div>
      <div className="date" style={{ color: 'var(--secondary-color)' }}>
        {date}
      </div>
    </div>
  );
};

export default ProjectOverview;
