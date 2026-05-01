import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-blue" />
        <div className="orb orb-amber" />
        <div className="orb orb-purple" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Hi, I'm</p>
        <h1 className="hero-name">Carlos Baston</h1>
        <p className="hero-title">Full Stack Engineer</p>
        <p className="hero-tagline">
          I build clean, purposeful web applications — from backend APIs to polished UIs. ⚡
        </p>
        <div className="hero-ctas">
          <a href="#portfolio" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
