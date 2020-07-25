import React from 'react';
import '../css/index.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

const IndexPage = () => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="container mx-auto">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="desc" content={description} />
      </Helmet>
      <div className="h-35 pl-5 pt-5 border-b-2 border-gray-300">
        <div className="text-blue-500 text-5xl font-bold subpixel-antialiased">
          Aakash
        </div>
        <div className="pt-5 pb-3 space-x-4">
          <span>
            <FaTwitter color="#5f6c80" />
          </span>
          <span>
            <FaLinkedin color="#5f6c80" />
          </span>
          <span>
            <FaGithub color="#5f6c80" />
          </span>
          <span>
            <FiMail color="#5f6c80" />
          </span>
        </div>
      </div>
      <div className="h-64 pl-5 pr-5 pt-20 align-middle subpixel-antialiased">
        <div className="text-4xl text-blue-500 text-5xl">Hi.</div>
        <div className="text-gray-600 bio text-2xl">
          I'm Aakash Raina - currently working as UI Engineer @{' '}
          <p className="text-blue-500">Razorpay[YC-2015]</p>, on the core
          payments team. I write mostly about{' '}
          <p className="text-blue-500">Javascript</p>,{' '}
          <p className="text-blue-500">React</p>,{' '}
          <p className="text-blue-500">Web performance</p> 🚀 and{' '}
          <p className="text-blue-500">Frontend</p> development in general.
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
