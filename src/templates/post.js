import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import '../css/blogpage.styl';

// slug passed in context is available here as a query parameter
// used to query data for that page
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        description
        date
        tags
      }
      html
      timeToRead
    }
  }
`;

// queries returned response is directly available inside the component as props 🎩
const PostTemplate = ({ data: { markdownRemark: post } }) => {
  const { title, description, tags } = post.frontmatter;

  return (
    <Layout isBlogPage={true}>
      <Seo title={title} description={description} />
      <main>
        <article>
          <header className="blog-header">{title}</header>
          <div className="blog-meta">
            <span>{tags[0]}</span>
            {'***'}
            <span>{post.timeToRead} mins</span>
          </div>
          <div
            className="blog-page-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer className="blog-page-footer">
            Copyright &#xa9; Aakash Raina, 2020
          </footer>
        </article>
      </main>
    </Layout>
  );
};

export default PostTemplate;
