import * as React from "react"
import { graphql, Link } from "gatsby"

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "900px", margin: "auto", lineHeight: "1.8" }}>
      <h1 style={{ color: "#007acc", fontSize: "2.5rem", marginBottom: "1rem" }}>Projects</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Here are some of the personal and academic projects I’ve worked on recently.
      </p>

      <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
        {projects.map(project => (
          <div key={project.id} style={{
            border: "1px solid #ddd",
            padding: "1.5rem",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}>
            <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.5rem", color: "#333" }}>
              <Link to={project.fields.slug} style={{ color: "#007acc", textDecoration: "none" }}>
                {project.frontmatter.title}
              </Link>
            </h2>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "1rem", color: "#555" }}>{project.frontmatter.description}</p>
            
          </div>
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
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { frontmatter: { title: ASC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          tech
        }
        fields {
          slug
        }
      }
    }
  }
`

export default ProjectsPage
