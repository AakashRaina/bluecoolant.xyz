import React, { useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Profile from '../components/Profile';
import useSiteMetadata from '../hooks/useSiteMetadata';
import ProjectOverview from '../components/projectoverview';
import projectsJSON from '../content/projects.json';
import { AiFillHeart } from 'react-icons/ai';
import '../css/index.styl';

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState('Profiles');
  const { title, description } = useSiteMetadata();

  const handleTabChange = e => setActiveTab(e.currentTarget.innerText);

  return (
    <Layout isBlogPage={false}>
      <Seo title={title} description={description} />
      <div className="bio">
        <div className="highlight-text">Hi.</div>
        <div className="about" style={{ color: 'var(--secondary-color)' }}>
          I'm Aakash Raina - currently working as Frontend engineer @{' '}
          <p>
            <a
              href="https://razorpay.com/"
              target="_blank"
              rel="noreferrer"
              className="highlight-text"
              style={{ color: 'var(--primary-color)' }}
            >
              Razorpay[YC-W15]
            </a>
          </p>
          , on the core payments team. I write mostly about{' '}
          <p className="highlight-text">Javascript</p>,{' '}
          <p className="highlight-text">React</p>,{' '}
          <p className="highlight-text">Web performance</p> 🚀 and{' '}
          <p className="highlight-text">Frontend</p> development in general.
          <p className="heart">
            <AiFillHeart color="red" />
          </p>
          everything web.
        </div>
      </div>
      <div className="post-list-header">
        <span
          className={`${activeTab === 'Profiles' ? 'active' : ''}`}
          onClick={handleTabChange}
        >
          Profiles
        </span>
        <span
          className={`${activeTab === 'Side projects' ? 'active' : ''}`}
          onClick={handleTabChange}
        >
          Side projects
        </span>
      </div>
      <div>
        {activeTab === 'Profiles' ? (
          <Profile />
        ) : (
          projectsJSON.projects.map((project, idx) => {
            return <ProjectOverview project={project} key={idx} />;
          })
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;
