import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
          twitter
          github
          mailto
          linkedIn
          resume
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
