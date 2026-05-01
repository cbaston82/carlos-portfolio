import { useState, useEffect } from 'react'
import './Portfolio.css'
import JokesTerminal from './JokesTerminal'

function AppleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.78,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.91,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.2,6.05 13.07,6.69 11.95,6.6C11.8,5.46 12.36,4.26 13,3.5Z"/>
    </svg>
  )
}

function AndroidIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.5 10 A6.5 6.5 0 0 1 18.5 10 Z"/>
      <rect x="4" y="10" width="16" height="9" rx="1"/>
      <rect x="1" y="10" width="2.5" height="6" rx="1.25"/>
      <rect x="20.5" y="10" width="2.5" height="6" rx="1.25"/>
      <rect x="6.5" y="19" width="3" height="4" rx="1.5"/>
      <rect x="14.5" y="19" width="3" height="4" rx="1.5"/>
    </svg>
  )
}

import rackemmImg          from '../assets/rackemm.png'
import rtnImg              from '../assets/rtn-tv.png'
import centralRecoveryImg  from '../assets/central-recovery-press.png'
import mobBilliards        from '../assets/mob-billiards.png'
import dotsImg             from '../assets/dots-southern-kitchen.png'

const projects = [
  {
    name: 'Rackemm',
    description:
      'A full stack billiards tournament platform where players can discover public events and organizers can create and manage their own. Features JWT authentication, Stripe subscription billing, image hosting via Cloudinary, and transactional email through SendGrid.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Cloudinary', 'SendGrid'],
    live: 'https://rackemm.com',
    github: 'https://github.com/cbaston82/rackemm-ui',
    type: 'Personal Project',
    preview: rackemmImg,
  },
  {
    name: 'TandemSet',
    description:
      'A mobile app built specifically for CDL truck drivers running multi-state routes. Select your states and instantly get the most restrictive bridge law — so you know exactly where to set your tandems before you roll. Fully offline, no account needed.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    live: null,
    github: 'https://github.com/cbaston82/TandemSet',
    type: 'Personal Project',
    platform: 'mobile',
    appStore: 'https://apps.apple.com/us/app/tandemset/id6764713884',
    googlePlay: null,
    googlePlayTesting: true,
    preview: null,
  },
  {
    name: 'RTN.TV — Streaming Platform',
    description:
      'As Manager of Software Engineering at Roberts Communications Network, I led the team in a full rebuild of their streaming platform. Architected a modern React frontend backed by a Laravel REST API, bringing a legacy system up to current standards. Currently live in beta.',
    tags: ['React', 'Laravel', 'PHP', 'REST API', 'Team Lead'],
    live: 'https://beta.rtn.tv',
    github: null,
    type: 'Professional',
    preview: rtnImg,
  },
  {
    name: 'CCSD Surveillance Platform',
    description:
      'Designed and led development of an enterprise-grade internal surveillance management system for Clark County School District. The platform scaled to support 300+ schools and over 10,000 cameras — giving security teams centralized visibility across one of the largest school districts in the country.',
    tags: ['Full Stack', 'Internal Systems', 'Enterprise'],
    live: null,
    github: null,
    type: 'Professional',
    preview: null,
  },
  {
    name: 'Allegiant Air — Travel Systems',
    description:
      "Joined Allegiant Air's engineering team during a period of international expansion. Contributed to customer-facing travel systems across the full development lifecycle — from design and development through QA and deployment — helping the airline ship reliable software to millions of travelers.",
    tags: ['Full Stack', 'Software Development', 'QA Engineering'],
    live: null,
    github: null,
    type: 'Professional',
    preview: null,
  },
  {
    name: 'Central Recovery Press',
    description:
      'Delivered a polished WordPress site for a publishing company focused on addiction recovery literature. Extended core WordPress functionality with custom plugins tailored to their specific content and publishing workflow needs.',
    tags: ['WordPress', 'PHP', 'Custom Plugins'],
    live: 'https://centralrecoverypress.com',
    github: null,
    type: 'Freelance',
    preview: centralRecoveryImg,
  },
  {
    name: 'Mob Billiards',
    description:
      'Built a branded WordPress site for a billiards company that required more than an off-the-shelf theme could deliver. Developed custom pages with a full Salatto API integration to surface dynamic product and content data directly from their third-party platform.',
    tags: ['WordPress', 'PHP', 'REST API', 'Salatto'],
    live: 'https://mobbilliards.com',
    github: null,
    type: 'Freelance',
    preview: mobBilliards,
  },
  {
    name: "Dot's Southern Kitchen",
    description:
      "My very first client project — a restaurant website built in 2014 for Dot's Southern Kitchen, a Las Vegas staple with two locations known for classic Southern cooking. Hand-coded with HTML, CSS, jQuery, and PHP, no frameworks. A full menu, about page, contact form, and Google Maps integration.",
    tags: ['HTML', 'CSS', 'jQuery', 'PHP', 'Netlify'],
    live: 'http://dotssouthernkitchen2.com',
    github: null,
    type: 'Freelance',
    preview: dotsImg,
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
    preview: null,
  },
  {
    name: 'Freelance Web Development',
    description:
      'Over 8 years of independent client work — planning, building, launching, and supporting web projects across industries. Every project owned from first conversation to final deployment.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Client Work'],
    live: null,
    github: null,
    type: 'Freelance',
    preview: null,
  },
]

function PreviewModal({ project, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-bar">
          <div className="modal-dots">
            <span className="modal-dot" onClick={onClose} />
            <span className="modal-dot" />
            <span className="modal-dot" />
          </div>
          <span className="modal-url">{project.live}</span>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <img src={project.preview} alt={`${project.name} preview`} className="modal-screenshot" />
        </div>
        <div className="modal-footer">
          <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
            Visit Site
          </a>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  const [activePreview, setActivePreview] = useState(null)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-inner">
        <h2 className="section-heading">Portfolio 🎯</h2>

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
            <div key={project.name} className="project-card" data-type={project.type}>
              <div className="project-header">
                <span className="project-type">{project.type}</span>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                  )}
                </div>
              </div>

              <h3 className="project-name">
                {project.name}{project.platform === 'mobile' ? ' - Mobile' : ''}
              </h3>
              <p className="project-description">{project.description}</p>

              {project.platform === 'mobile' && (
                <div className="store-links">
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noreferrer" className="store-btn store-btn--ios">
                      <AppleIcon /> App Store
                    </a>
                  )}
                  {project.googlePlay && (
                    <a href={project.googlePlay} target="_blank" rel="noreferrer" className="store-btn store-btn--android">
                      <AndroidIcon /> Google Play
                    </a>
                  )}
                  {project.googlePlayTesting && (
                    <a
                      href="mailto:cbaston.dev@gmail.com?subject=TandemSet%20-%20Android%20Tester%20Request&body=Hi%20Carlos%2C%20I%27d%20like%20to%20be%20a%20tester%20for%20TandemSet%20on%20Android.%20Please%20add%20me%20to%20your%20tester%20list."
                      className="store-btn store-btn--tester"
                    >
                      <AndroidIcon /> Request Android Beta
                    </a>
                  )}
                </div>
              )}

              <div className="project-footer">
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="project-tag">{tag}</li>
                  ))}
                </ul>
                {project.preview && (
                  <button className="preview-btn" onClick={() => setActivePreview(project)}>
                    Preview
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activePreview && (
        <PreviewModal project={activePreview} onClose={() => setActivePreview(null)} />
      )}
    </section>
  )
}

export default Portfolio
