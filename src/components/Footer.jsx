import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">CB</span>
        <p className="footer-copy">© {new Date().getFullYear()} Carlos Baston. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/cbaston82" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/carlos-baston-04341484/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:cbaston.dev@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
