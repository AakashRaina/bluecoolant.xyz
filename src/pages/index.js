import React, { useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import usePosts from '../hooks/usePosts';
import useSiteMetadata from '../hooks/useSiteMetadata';
import PostOverview from '../components/postoverview';
import ProjectOverview from '../components/projectoverview';
import projectsJSON from '../content/projects.json';
import '../css/index.styl';

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const posts = usePosts();
  const { title, description } = useSiteMetadata();

  const handleTabChange = e => setActiveTab(e.currentTarget.innerText);

  return (
    <Layout>
      <Seo title={title} description={description} />
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
      <div className="post-list-header">
        <span
          className={`${activeTab === 'Posts' ? 'active' : ''}`}
          onClick={handleTabChange}
        >
          Posts
        </span>
        <span
          className={`${activeTab === 'Personal Projects' ? 'active' : ''}`}
          onClick={handleTabChange}
        >
          Personal Projects
        </span>
      </div>
      <div className="posts-list">
        {activeTab === 'Posts'
          ? posts.map((post, idx) => {
              return <PostOverview post={post} key={idx} />;
            })
          : projectsJSON.projects.map((project, idx) => {
              return <ProjectOverview project={project} key={idx} />;
            })}
      </div>
    </Layout>
  );
};

export default IndexPage;
