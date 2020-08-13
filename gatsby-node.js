exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(`Failed to create post pages`, result.errors);
  }

  const posts = result.data.allMarkdownRemark.nodes;
  posts.forEach(post => {
    // component is used as a template for each created page
    // context is passed as a parameter to graphql query by gatsby under the hood
    // and is available in the component/template 💫
    actions.createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
