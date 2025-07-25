import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "700px", margin: "auto" }}>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginBottom: "1rem" }}>
        <a href="https://www.linkedin.com/in/mohamed-taha-bhaya-1783a133b/" target="_blank" rel="noopener noreferrer" style={iconContainerStyle}>
            <StaticImage
              src="../images/linkedin-logo.png"
              alt="LinkedIn"
              placeholder="blurred"
              width={100}
              height={100}
            />

        </a>
        <a href="https://gitlab2.istic.univ-rennes1.fr/mbhaya" target="_blank" rel="noopener noreferrer" style={iconContainerStyle}>
            <StaticImage
              src="../images/gitlab-logo.png"
              alt="GitLab"
              placeholder="blurred"
              width={100}
              height={100}
            />

        </a>
        <a href="mailto:motaha.bhaya@gmail.com" style={iconContainerStyle}>

            <StaticImage
              src="../images/email-logo.png"
              alt="Email"
              placeholder="blurred"
              width={100}
              height={100}
            />

        </a>
      </div>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#007acc" }}>Mohamed Taha BHAYA</h1>
      
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "20px" }}>
        <StaticImage
          src="../images/profile.png"
          alt="Profile photo"
          placeholder="blurred"
          width={800}
          height={800}
          style={{ borderRadius: "800px" }} 
        />
        <p style={{ fontSize: "1.5rem", color: "#555", margin: 0 }}>
          Computer Science Student Passionate about App Development, Game Design & Digital Sustainability
        </p>
      </div>

      <p style={{ marginTop: "2.5rem", lineHeight: "1.5", fontSize: "1.2rem" }}>
        Welcome to my personal website. Here you'll find my latest projects, as well as thoughts on tech, learning, and sustainable computing.
      </p>

      <nav style={{ marginTop: "2.5rem" }}>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/blog" style={linkStyle}>Blog</Link>
      </nav>
    </main>
  )
}

const iconContainerStyle = {
  display: "inline-block",
  width: "24px",
  height: "24px"
}

const linkStyle = {
  display: "inline-block",
  marginRight: "1.5rem",
  color: "#007acc",
  textDecoration: "none",
  fontWeight: "bold"
}

export default IndexPage
