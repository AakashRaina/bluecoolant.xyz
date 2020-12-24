import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../css/404.styl';

export const imageQuery = graphql`
  query {
    file(relativePath: { eq: "404.png" }) {
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
`;

const PageNotFound = ({ data }) => {
  return (
    <Layout>
      <div className="page-not-found">
        <Img alt="" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="page-not-found-content">
        <span>
          Hey!! You found something. Let me ask you a question. Are YOU aware of
          Time or is Time aware of YOU? It's the former isn't it? Time exists in
          YOU. Infact, everything exists in YOU ⚡️ Didn't get it? Google
          <p>Advaita Vedanta</p> 😉
        </span>
      </div>
    </Layout>
  );
};

export default PageNotFound;
