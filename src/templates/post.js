import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import CodeBlock from '../components/CodeBlock';
import { graphql } from 'gatsby';
import { FiShare } from 'react-icons/fi';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import '../css/blogpage.styl';

// slug passed in context is available here as a query parameter
// used to query data for that page
export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { frontmatter: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          title
          tags
          date
          description
          slug
        }
        timeToRead
        body
      }
    }
  }
`;

const components = {
  pre: CodeBlock,
};

// queries returned response is directly available inside the component as props 🎩
const PostTemplate = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const [showShare, setShowShare] = React.useState(false);

  const { title, description, tags } = nodes[0].frontmatter;

  // When it's hydarated on client side, I want to show share
  // button but for only supported browsers on mobile
  React.useEffect(() => {
    if (navigator && navigator.share) setShowShare(true);
  }, []);

  const onShareClick = () => {
    navigator
      .share({
        title: `${title}`,
        url: `${window.location.href}`,
      })
      .then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
  };

  return (
    <Layout isBlogPage={true}>
      <Seo title={title} description={description} />
      <main>
        <article>
          <header className="blog-header">{title}</header>
          <div className="blog-meta">
            <span className="tag">{tags[0]}</span>{' '}
            <span className="time-to-read">{nodes[0].timeToRead} min read</span>
          </div>
          <div className="blog-page-content" lang="en">
            <MDXProvider components={components}>
              <MDXRenderer>{nodes[0].body}</MDXRenderer>
            </MDXProvider>
          </div>
          <div className="share">
            {showShare && (
              <span onClick={onShareClick}>
                <FiShare />
              </span>
            )}
          </div>
          <footer className="blog-page-footer">&#xa9; Aakash Raina</footer>
        </article>
      </main>
    </Layout>
  );
};

export default PostTemplate;
