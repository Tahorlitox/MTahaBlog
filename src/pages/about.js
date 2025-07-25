import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "700px", margin: "auto", lineHeight: "1.8" }}>
      {/* Social Links Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
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

      <h1 style={{ color: "#007acc", fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Who I Am</h2>
        <p>
          My name is <strong>Mohamed Taha Bhaya</strong>. I'm a computer science student with a background in math and physics.
          I spent two years in CPGE (PCSI / PSI) before shifting to computer science — where I truly found what fits me.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "0.5rem" }}>What I Care About</h2>
        <p>
          I care about clean code, clean design, and building things that actually solve problems — even small ones.  
          I enjoy working on games that challenge how we think or interact with systems.
        </p>
        <p>
          I also care about how we use technology: how it affects our brain, our focus, and how we can make it more sustainable and intentional.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Outside of Code</h2>
        <p>
          Outside of code, I enjoy playing video games, exercising, watching sports and films (especially sci-fi), and thinking about ideas that connect tech, learning, and mindset.
        </p>
      </section>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/" style={buttonStyle}>← Back to Home</Link>
      </div>
    </main>
  )
}

const iconContainerStyle = {
  display: "inline-block",
  width: "50px",
  height: "50px",
  textAlign: "center"
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

export default AboutPage
