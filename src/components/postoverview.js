import React from 'react';
import { Link } from 'gatsby';
import '../css/postoverview.styl';

const PostOverview = ({ post }) => {
  const {
    frontmatter: { title, description, date, slug },
    timeToRead,
  } = post;
  return (
    <div className="post-overview">
      <div className="title">
        <Link className="highlight-text" to={slug}>
          {title}
        </Link>
      </div>
      <div className="meta">
        posted on <strong>{date}</strong>
        <span>
          {', '}
          {timeToRead} min read
        </span>
      </div>
    </div>
  );
};

export default PostOverview;
