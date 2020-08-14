import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiFileLine } from 'react-icons/ri';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import '../css/layout.styl';

const Layout = ({ children }) => {
  const { github, twitter, linkedIn, mailto, resume } = useSiteMetadata();
  deckDeckGoHighlightElement();

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
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
                    <FaTwitter color="var(--secondary-color)" />
                  </a>
                </span>
                <span>
                  <a href={linkedIn} target="_blank" rel="noreferrer">
                    <FaLinkedin color="var(--secondary-color)" />
                  </a>
                </span>
                <span>
                  <a href={github} target="_blank" rel="noreferrer">
                    <FaGithub color="var(--secondary-color)" />
                  </a>
                </span>
                <span>
                  <a href={mailto}>
                    <FiMail color="var(--secondary-color)" />
                  </a>
                </span>
                <span>
                  <a href={resume} target="_blank" rel="noreferrer">
                    <RiFileLine color="var(--secondary-color)" />
                  </a>
                </span>
              </div>
              <span className="blog-section">
                <Link to="/blog" className="highlight-text">
                  Blog
                </Link>
              </span>
              <span
                onClick={e =>
                  toggleTheme(
                    e.currentTarget.innerText === `💡` ? 'light' : 'dark',
                  )
                }
                className="theme-toggle"
              >
                {theme === `dark` ? `💡` : `🌙`}
              </span>
            </div>
            {children}
          </div>
        );
      }}
    </ThemeToggler>
  );
};

export default Layout;
