const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Check if the node is a MarkdownRemark file
  if (node.internal.type === "MarkdownRemark") {
    // Get the name of the directory from the source filesystem
    const fileNode = getNode(node.parent);
    const sourceName = fileNode.sourceInstanceName;

    // Based on the source, create the correct slug
    let slug;
    if (sourceName === "blog") {
      slug = `/blog/${path.basename(fileNode.relativeDirectory)}/`;
    } else if (sourceName === "projects") {
      slug = `/projects/${path.basename(fileNode.relativeDirectory)}/`;
    }

    // Only create the field if a slug was successfully generated
    if (slug) {
      createNodeField({
        node,
        name: "slug",
        value: slug,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 1. Query for all blog posts
  const blogPostsResult = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  // Create a page for each blog post using the correct template
  if (blogPostsResult.data && blogPostsResult.data.allMarkdownRemark) {
    blogPostsResult.data.allMarkdownRemark.nodes.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: post.fields.slug,
        },
      });
    });
  }


  // 2. Query for all project posts
  const projectPostsResult = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/projects/" } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  // Create a page for each project post using the correct template
  if (projectPostsResult.data && projectPostsResult.data.allMarkdownRemark) {
    projectPostsResult.data.allMarkdownRemark.nodes.forEach(project => {
      createPage({
        path: project.fields.slug,
        component: path.resolve(`./src/templates/project-post.js`),
        context: {
          slug: project.fields.slug,
        },
      });
    });
  }
};