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
      }
      html
      rawMarkdownBody
    }
  }
`;

// queries returned response is directly available inside the component as props 🎩
const PostTemplate = ({ data: { markdownRemark: post } }) => {
  const { title, description } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main>
        <article>
          <header>{title}</header>
          <div
            class="blog-page-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <footer></footer>
        </article>
      </main>
    </Layout>
  );
};

export default PostTemplate;
