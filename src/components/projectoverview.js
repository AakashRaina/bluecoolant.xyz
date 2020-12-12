import React from 'react';
import '../css/overview.styl';

const ProjectOverview = ({ project }) => {
  const { projectName, projectUrl, projectDescription, date } = project;

  return (
    <div className="overview">
      <div className="title">
        <span className="highlight-text animate-text-underline">
          <a href={projectUrl} target="_blank" rel="noreferrer">
            {projectName}{' '}
          </a>
        </span>
      </div>
      <div className="description">{projectDescription}</div>
      <div className="date">{date}</div>
    </div>
  );
};

export default ProjectOverview;
