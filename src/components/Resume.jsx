import './Resume.css'

function handlePrint() {
  window.print()
}

const summary = `Full stack software engineer with 10+ years of experience building web applications, leading engineering teams, and delivering production software across multiple industries. Background spans frontend and backend development, QA engineering, software architecture, and 8+ years of independent freelance work. Also an active CDL Class A over-the-road truck driver — a combination that brings discipline, reliability, and real-world problem solving to everything I build.`

const softwareRoles = [
  {
    title: 'Manager of Software Engineering',
    company: 'Roberts Communications Network',
    location: 'Henderson, NV',
    period: 'April 2021 – June 2024',
    bullets: [
      'Led software engineering teams across the full development lifecycle — planning, delivery, and stakeholder communication.',
      'Directed the full rebuild of RTN.TV, the company\'s main streaming platform, using React and Laravel.',
      'Improved team workflows, resolved cross-functional blockers, and reported project status and risks to leadership.',
    ],
  },
  {
    title: 'Lead Full Stack Software Engineer',
    company: 'Roberts Communications Network',
    location: 'Henderson, NV',
    period: 'December 2020 – April 2021',
    bullets: [
      'Owned architecture, planning, development, testing, and maintenance of core software systems.',
      'Drove modernization efforts across legacy codebases and established scalable frontend and API patterns.',
    ],
  },
  {
    title: 'Software Engineer in Test',
    company: 'Allegiant Air',
    location: 'Las Vegas, NV',
    period: 'December 2019 – December 2020',
    bullets: [
      'Developed internal tools and contributed to QA strategy across customer-facing travel systems.',
      'Worked across the full development lifecycle from design through deployment using modern software practices.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Allegiant Air',
    location: 'Las Vegas, NV',
    period: 'November 2018 – December 2019',
    bullets: [
      'Supported international service expansion through development of customer-facing travel systems.',
    ],
  },
  {
    title: 'Lead Software Developer',
    company: 'MGL Agency',
    location: 'Las Vegas, NV',
    period: 'October 2016 – November 2018',
    bullets: [
      'Built and integrated server-side application logic and dynamic web applications for agency clients.',
      'Created prototypes, developed testing workflows, and led delivery across multiple concurrent projects.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'CCSD Security Systems Police Services',
    location: 'Las Vegas, NV',
    period: 'September 2014 – July 2017',
    bullets: [
      'Led development of internal surveillance management systems deployed across 300+ schools and 10,000+ cameras.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'carlosbaston.com',
    location: 'Las Vegas, NV',
    period: 'February 2012 – December 2020',
    bullets: [
      'Managed client projects end to end — planning, development, documentation, deployment, and ongoing support.',
      'Delivered WordPress sites, custom plugins, REST API integrations, and custom web applications.',
    ],
  },
]

const education = [
  {
    degree: 'Associate of Applied Science — Computer and Electronics Engineering Technology',
    school: 'ITT Technical Institute',
    location: 'Henderson, NV',
    period: 'March 2010 – December 2012',
  },
  {
    degree: 'CDL Class A Manual Transmission Certificate · HAZMAT',
    school: 'OTR Driving School',
    location: 'Las Vegas, NV',
    period: 'June 2024 – July 2024',
  },
]

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-inner">
        <div className="resume-top-bar">
          <h2 className="section-heading" style={{marginBottom: 0}}>Resume</h2>
          <button className="resume-download-btn" onClick={handlePrint}>
            ↓ Download PDF
          </button>
        </div>

        <div className="resume-doc">

          <div className="resume-header">
            <h3 className="resume-header-name">Carlos Baston</h3>
            <div className="resume-header-meta">
              <span>Las Vegas, NV</span>
              <span>·</span>
              <a href="mailto:cbaston.dev@gmail.com">cbaston.dev@gmail.com</a>
              <span>·</span>
              <a href="https://github.com/cbaston82" target="_blank" rel="noreferrer">github.com/cbaston82</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/carlos-baston-04341484/" target="_blank" rel="noreferrer">linkedin.com/in/carlos-baston</a>
            </div>
          </div>

          <div className="resume-summary">
            <p>{summary}</p>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Software Engineering Experience</h3>
            <div className="resume-roles">
              {softwareRoles.map((role) => (
                <div key={role.title + role.company} className="resume-role">
                  <div className="role-header">
                    <div className="role-left">
                      <span className="role-title">{role.title}</span>
                      <span className="role-company">{role.company} · {role.location}</span>
                    </div>
                    <span className="role-period">{role.period}</span>
                  </div>
                  <ul className="role-bullets">
                    {role.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-roles">
              {education.map((ed) => (
                <div key={ed.degree} className="resume-role">
                  <div className="role-header">
                    <div className="role-left">
                      <span className="role-title">{ed.degree}</span>
                      <span className="role-company">{ed.school} · {ed.location}</span>
                    </div>
                    <span className="role-period">{ed.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Resume
