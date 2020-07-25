import React from 'react';
import Layout from '../components/layout';
import '../css/index.styl';

const IndexPage = () => {
  return (
    <Layout>
      <div className='bio'>
        <div className="text-4xl text-blue-500 text-5xl">Hi.</div>
        <div className="text-gray-600 bio text-2xl">
          I'm Aakash Raina - currently working as UI Engineer @{' '}
          <p className="text-blue-500"><a href='https://razorpay.com/' target='_blank' rel="noreferrer">Razorpay[YC-2015]</a></p>, on the core
          payments team. I write mostly about{' '}
          <p className="text-blue-500">Javascript</p>,{' '}
          <p className="text-blue-500">React</p>,{' '}
          <p className="text-blue-500">Web performance</p> 🚀 and{' '}
          <p className="text-blue-500">Frontend</p> development in general.❤️
          anything Web.
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
