import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// slug passed in context is available here as a query parameter
// used to query data for that page
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        date
      }
      body
    }
  }
`;

// queries returned response is directly available inside the component as props 🎩
const PostTemplate = ({ data: { mdx: post } }) => {
  const { title, description } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={description} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export default PostTemplate;
