import React from 'react';
import Helmet from 'react-helmet';

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="desc" content={description} />
    </Helmet>
  );
};

export default Seo;
