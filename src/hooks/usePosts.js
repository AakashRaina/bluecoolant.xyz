import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default usePosts;
