import * as React from "react"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
      <h1 style={{ color: "#007acc", fontSize: "2.5rem", marginBottom: "1rem" }}>Blog</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Thoughts on code, tech, learning, and mindset.
      </p>

      <div style={{ marginTop: "2rem" }}>
        {posts.map(post => (
          <article key={post.id} style={{
            border: "1px solid #ddd",
            padding: "1.5rem",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "1.5rem"
          }}>
            <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.5rem", color: "#333" }}>
              <Link to={post.fields.slug} style={{ color: "#007acc", textDecoration: "none" }}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <p style={{ color: "#666", marginBottom: "1rem" }}>{post.frontmatter.date}</p>
            <p style={{ margin: 0 }}>{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/" style={buttonStyle}>← Back to Home</Link>
      </div>
    </main>
  )
}

const buttonStyle = {
  display: "inline-block",
  padding: "0.8rem 1.5rem",
  backgroundColor: "#007acc",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  fontWeight: "bold",
  transition: "background-color 0.3s",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
}

buttonStyle[':hover'] = {
  backgroundColor: "#005f99"
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`

export default BlogPage
