import React from 'react';
import Helmet from 'react-helmet';

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
