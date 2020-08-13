import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date})  {
        nodes {
          frontmatter {
            title
            slug
            description
            date(formatString: "MMMM DD YYYY")
          }
          timeToRead
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes;
};

export default usePosts;
