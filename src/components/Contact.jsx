import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)

    const form = e.target
    const data = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Try emailing me directly at cbaston.dev@gmail.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <h2 className="section-heading">Contact</h2>
          <p className="contact-sub">
            Have a project in mind or just want to connect? Send me a message or find me on LinkedIn.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/carlos-baston-04341484/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <span className="contact-link-icon">in</span>
              <div>
                <p className="contact-link-label">LinkedIn</p>
                <p className="contact-link-value">linkedin.com/in/carlos-baston</p>
              </div>
            </a>

            <a href="mailto:cbaston.dev@gmail.com" className="contact-link-card">
              <span className="contact-link-icon">@</span>
              <div>
                <p className="contact-link-label">Email</p>
                <p className="contact-link-value">cbaston.dev@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/cbaston82"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <span className="contact-link-icon">gh</span>
              <div>
                <p className="contact-link-label">GitHub</p>
                <p className="contact-link-value">github.com/cbaston82</p>
              </div>
            </a>
          </div>

          {submitted ? (
            <div className="contact-success">
              <p className="contact-success-title">Message sent!</p>
              <p className="contact-success-sub">Thanks for reaching out — I'll get back to you soon. 🤙</p>
            </div>
          ) : (
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="What's on your mind?" required />
              </div>

              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
