import React from 'react';
import '../css/overview.styl';
import { Link } from 'gatsby';

const PostOverview = ({ post }) => {
  const {
    frontmatter: { title, description, date, slug },
  } = post;
  return (
    <div className="overview">
      <div className="title">
        <Link className="highlight-text" to={slug}>
          {title}
        </Link>
      </div>
      <div className="date">{date}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default PostOverview;
