import React from 'react';
import '../css/layout.styl';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="layout-container">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="desc" content={description} />
      </Helmet>
      <div className="header">
        <div>
          <Link to="/" className="highlight-text">
            Aakash
          </Link>
        </div>
        <div className="social-links">
          <span>
            <a
              href="https://twitter.com/Bluecoolant"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter color="#5f6c80" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/aakashraina/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="#5f6c80" />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/AakashRaina"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="#5f6c80" />
            </a>
          </span>
          <span>
            <a href="mailto:aakashraina9@gmail.com">
              <FiMail color="#5f6c80" />
            </a>
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
