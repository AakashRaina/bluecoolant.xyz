import { graphql, useStaticQuery } from 'gatsby';

const useProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Profile.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);

  return data;
};

export default useProfileImage;
