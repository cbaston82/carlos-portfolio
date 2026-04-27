import './Nav.css'

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resume',    href: '#resume'    },
  { label: 'Contact',   href: '#contact'   },
]

function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">CB</a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
