import './About.css'
import profilePhoto from '../assets/profile.jpg'

const STATES_48 = [
  'AL','AZ','AR','CA','CO','CT','DE','FL','GA',
  'ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH',
  'NJ','NM','NY','NC','ND','OH','OK','OR','PA',
  'RI','SC','SD','TN','TX','UT','VT','VA','WA',
  'WV','WI','WY',
]

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">

        <div className="about-photo">
          <img src={profilePhoto} alt="Carlos Baston" className="about-photo-img" />
        </div>

        <div className="about-text">
          <h2 className="section-heading">About Me</h2>

          <div className="about-identity">
            <div className="identity-pill">
              <span className="identity-icon">💻</span>
              <span>Full Stack Engineer</span>
            </div>
            <div className="identity-divider">+</div>
            <div className="identity-pill driver">
              <span className="identity-icon">🚚</span>
              <span>CDL Class A Driver</span>
            </div>
          </div>

          <p>
            I'm Carlos Baston — a full stack software engineer with 10+ years of experience
            building web applications, leading engineering teams, and shipping production software.
          </p>
          <p>
            I'm also an active over-the-road truck driver. Six-plus years behind the wheel across
            all 48 contiguous states taught me discipline, composure under pressure, and how to
            execute when it counts — skills that transfer directly to how I write code and lead teams.
          </p>
          <p>
            Faith-driven, detail-oriented, and always building toward the next level.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Years Engineering</span>
            </div>
            <div className="stat warm">
              <span className="stat-value">6+</span>
              <span className="stat-label">Years OTR</span>
            </div>
            <div className="stat warm">
              <span className="stat-value">48</span>
              <span className="stat-label">States Driven</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-states-section">
        <div className="about-states-inner">
          <p className="states-label">All 48 Contiguous States</p>
          <div className="states-grid">
            {STATES_48.map(state => (
              <span key={state} className="state-chip">{state}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
