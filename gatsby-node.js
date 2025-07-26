const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = `/blog/${path.basename(getNode(node.parent).relativeDirectory)}/`
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.fields.slug,
      },
    })
  })
  result.data.allMarkdownRemark.nodes.forEach(project => {
    createPage({
      path: project.fields.slug,
      component: path.resolve(`./src/templates/project-post.js`),
      context: {
        slug: project.fields.slug,
      },
    })
  })
}
