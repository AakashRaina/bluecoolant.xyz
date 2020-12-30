import React from 'react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import '../css/layout.styl';

const Layout = ({ children, isBlogPage }) => {
  deckDeckGoHighlightElement();

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <div className="layout-container">
            {isBlogPage === false && (
              <div className="header">
                <div>
                  <Link
                    to="/"
                    className="highlight-text animate-text-underline"
                  >
                    <p>Aakash</p>
                  </Link>
                </div>
                <div className="social-links">
                  <span />
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
            )}
            {children}
          </div>
        );
      }}
    </ThemeToggler>
  );
};

export default Layout;
