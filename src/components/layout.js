import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiFileLine } from 'react-icons/ri';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Link } from 'gatsby';
import '../css/layout.styl';

const Layout = ({ children }) => {
  const { github, twitter, linkedIn, mailto, resume } = useSiteMetadata();
  deckDeckGoHighlightElement();

  return (
    <div className="layout-container">
      <div className="header">
        <div>
          <Link to="/" className="highlight-text">
            Aakash
          </Link>
        </div>
        <div className="social-links">
          <span>
            <a href={twitter} target="_blank" rel="noreferrer">
              <FaTwitter color="#5f6c80" />
            </a>
          </span>
          <span>
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin color="#5f6c80" />
            </a>
          </span>
          <span>
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub color="#5f6c80" />
            </a>
          </span>
          <span>
            <a href={mailto}>
              <FiMail color="#5f6c80" />
            </a>
          </span>
          <span>
            <a href={resume} target="_blank" rel="noreferrer">
              <RiFileLine color="#5f6c80" />
            </a>
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
