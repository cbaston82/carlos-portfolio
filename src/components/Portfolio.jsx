import './Portfolio.css'
import JokesTerminal from './JokesTerminal'

const projects = [
  {
    name: 'Rackemm',
    description:
      'A full stack billiards tournament platform where players can discover public events and organizers can create and manage their own. Features JWT authentication, Stripe subscription billing, image hosting via Cloudinary, and transactional email through SendGrid.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Cloudinary', 'SendGrid'],
    live: 'https://rackemm.netlify.app',
    github: 'https://github.com/cbaston82/rackemm-ui',
    type: 'Personal Project',
  },
  {
    name: 'TandemSet',
    description:
      'A mobile app built specifically for CDL truck drivers running multi-state routes. Select your states and instantly get the most restrictive bridge law — so you know exactly where to set your tandems before you roll. Fully offline, no account needed. Submitted to the App Store.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    live: null,
    github: 'https://github.com/cbaston82/TandemSet',
    type: 'Personal Project',
  },
  {
    name: 'RTN.TV — Streaming Platform',
    description:
      'As Manager of Software Engineering at Roberts Communications Network, I led the team in a full rebuild of their streaming platform. Architected a modern React frontend backed by a Laravel REST API, bringing a legacy system up to current standards. Currently live in beta.',
    tags: ['React', 'Laravel', 'PHP', 'REST API', 'Team Lead'],
    live: 'https://beta.rtn.tv',
    github: null,
    type: 'Professional',
  },
  {
    name: 'CCSD Surveillance Platform',
    description:
      'Designed and led development of an enterprise-grade internal surveillance management system for Clark County School District. The platform scaled to support 300+ schools and over 10,000 cameras — giving security teams centralized visibility across one of the largest school districts in the country.',
    tags: ['Full Stack', 'Internal Systems', 'Enterprise'],
    live: null,
    github: null,
    type: 'Professional',
  },
  {
    name: 'Allegiant Air — Travel Systems',
    description:
      "Joined Allegiant Air's engineering team during a period of international expansion. Contributed to customer-facing travel systems across the full development lifecycle — from design and development through QA and deployment — helping the airline ship reliable software to millions of travelers.",
    tags: ['Full Stack', 'Software Development', 'QA Engineering'],
    live: null,
    github: null,
    type: 'Professional',
  },
  {
    name: 'Central Recovery Press',
    description:
      'Delivered a polished WordPress site for a publishing company focused on addiction recovery literature. Extended core WordPress functionality with custom plugins tailored to their specific content and publishing workflow needs.',
    tags: ['WordPress', 'PHP', 'Custom Plugins'],
    live: 'https://centralrecoverypress.com',
    github: null,
    type: 'Freelance',
  },
  {
    name: 'Mob Billiards',
    description:
      'Built a branded WordPress site for a billiards company that required more than an off-the-shelf theme could deliver. Developed custom pages with a full Salatto API integration to surface dynamic product and content data directly from their third-party platform.',
    tags: ['WordPress', 'PHP', 'REST API', 'Salatto'],
    live: 'https://mobbilliards.com',
    github: null,
    type: 'Freelance',
  },
  {
    name: "Dot's Southern Kitchen",
    description:
      "My very first client project — a restaurant website built in 2014 for Dot's Southern Kitchen, a Las Vegas staple with two locations known for classic Southern cooking. Hand-coded with HTML, CSS, jQuery, and PHP, no frameworks. A full menu, about page, contact form, and Google Maps integration.",
    tags: ['HTML', 'CSS', 'jQuery', 'PHP', 'Netlify'],
    live: 'http://dotssouthernkitchen2.com',
    github: null,
    type: 'Freelance',
  },
  {
    name: 'Chuck Norris Terminal Jokes',
    description:
      'A bash script that fetches random Chuck Norris jokes straight from your terminal via the chucknorris.io API. Pass a first and last name to make the joke about anyone. Try the live demo below.',
    tags: ['Bash', 'Shell Scripting', 'REST API', 'CLI'],
    live: null,
    github: 'https://github.com/cbaston82/chuck_norris_terminal_jokes',
    type: 'Personal Project',
    featured: true,
  },
  {
    name: 'Freelance Web Development',
    description:
      'Over 8 years of independent client work — planning, building, launching, and supporting web projects across industries. Every project owned from first conversation to final deployment.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Client Work'],
    live: null,
    github: null,
    type: 'Freelance',
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-inner">
        <h2 className="section-heading">Portfolio</h2>

        <div className="portfolio-featured">
          <div className="featured-header">
            <div className="featured-header-top">
              <span className="featured-label">Live Demo</span>
              <a href="https://github.com/cbaston82/chuck_norris_terminal_jokes" target="_blank" rel="noreferrer" className="featured-github">GitHub</a>
            </div>
            <h3 className="featured-title">Chuck Norris Terminal Jokes</h3>
            <p className="featured-desc">
              Leave the name fields blank for a Chuck Norris joke, or enter any name to make it about someone else. Press <kbd>Enter</kbd> or click Run.
            </p>
          </div>
          <JokesTerminal />
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <div className="project-header">
                <span className="project-type">{project.type}</span>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site">
                      Live
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-tag">{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
