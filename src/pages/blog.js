import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';
import usePosts from '../hooks/usePosts';
import PostOverview from '../components/postoverview';

const BlogPage = () => {
  const posts = usePosts();
  const { title, description } = useSiteMetadata();
  return (
    <Layout isBlogPage={false}>
      <Seo title={title} description={description} />
      {posts.map((post, idx) => {
        return <PostOverview post={post} key={idx} />;
      })}
    </Layout>
  );
};

export default BlogPage;
