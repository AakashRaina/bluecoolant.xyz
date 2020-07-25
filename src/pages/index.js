import React from 'react';
import Layout from '../components/layout';
import '../css/index.styl';

const IndexPage = () => {
  return (
    <Layout>
      <div className="bio">
        <div className="highlight-text">Hi.</div>
        <div className="about">
          I'm Aakash Raina - currently working as UI Engineer @{' '}
          <p>
            <a
              href="https://razorpay.com/"
              target="_blank"
              rel="noreferrer"
              className="highlight-text"
            >
              Razorpay[YC-2015]
            </a>
          </p>
          , on the core payments team. I write mostly about{' '}
          <p className="highlight-text">Javascript</p>,{' '}
          <p className="highlight-text">React</p>,{' '}
          <p className="highlight-text">Web performance</p> 🚀 and{' '}
          <p className="highlight-text">Frontend</p> development in general.❤️
          anything Web.
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
