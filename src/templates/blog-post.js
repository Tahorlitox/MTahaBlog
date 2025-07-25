import * as React from "react"
import { graphql, Link } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
      <h1 style={{ color: "#007acc", fontSize: "2.5rem", marginBottom: "1rem" }}>{post.frontmatter.title}</h1>
      <p style={{ color: "#777", fontSize: "1rem", marginBottom: "2rem" }}>{post.frontmatter.date}</p>
      
      <div style={{ fontSize: "1.2rem", color: "#333" }} dangerouslySetInnerHTML={{ __html: post.html }} />

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/blog" style={buttonStyle}>← Back to Blog</Link>
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      html
    }
  }
`

export default BlogPost
