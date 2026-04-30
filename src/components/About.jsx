import './About.css'
import profilePhoto from '../assets/profile.jpg'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-photo">
          <img src={profilePhoto} alt="Carlos Baston" className="about-photo-img" />
        </div>

        <div className="about-text">
          <h2 className="section-heading">About Me</h2>
          <p>
            I'm Carlos Baston — a full stack software engineer based in the US. I build
            web applications with clean architecture, purposeful UI, and reliable backends.
          </p>
          <p>
            When I'm not writing code, I'm behind the wheel as an over-the-road truck
            driver with 6+ years of experience. That life taught me discipline, problem-solving
            under pressure, and how to stay sharp when it counts.
          </p>
          <p>
            I'm faith-driven, detail-oriented, and always working toward the next level —
            whether that's on the road or in the codebase.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-value">6+</span>
              <span className="stat-label">Years OTR</span>
            </div>
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-value">Full</span>
              <span className="stat-label">Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
