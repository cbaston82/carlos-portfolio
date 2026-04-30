import { useState } from 'react'
import './Nav.css'

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resume',    href: '#resume'    },
  { label: 'Contact',   href: '#contact'   },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">CB</a>

      <button
        className={`nav-hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
