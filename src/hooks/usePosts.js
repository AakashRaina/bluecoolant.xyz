import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            date
            description
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default usePosts;
