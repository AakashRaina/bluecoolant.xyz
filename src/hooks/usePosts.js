import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            description
            slug
            tags
            title
          }
          timeToRead
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default usePosts;
