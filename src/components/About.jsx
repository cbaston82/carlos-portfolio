import { useState, useEffect, useLayoutEffect, useRef } from 'react'
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

const SPEED = 55 // pixels per second

function buildSnakeOrder(chips) {
  const positions = chips.map((chip, i) => {
    if (!chip) return null
    const { left, top } = chip.getBoundingClientRect()
    return { index: i, x: left, y: Math.round(top) }
  }).filter(Boolean)

  const rows = []
  positions.forEach(pos => {
    const row = rows.find(r => Math.abs(r[0].y - pos.y) < 6)
    if (row) row.push(pos)
    else rows.push([pos])
  })

  rows.sort((a, b) => a[0].y - b[0].y)
  rows.forEach(row => row.sort((a, b) => a.x - b.x))

  const order = []
  rows.forEach((row, i) => {
    const indices = row.map(p => p.index)
    order.push(...(i % 2 === 0 ? indices : [...indices].reverse()))
  })
  return order
}

function getChipPositions(visitOrder, chipRefs, containerRef) {
  return visitOrder.map(chipIndex => {
    const chip      = chipRefs.current[chipIndex]
    const container = containerRef.current
    if (!chip || !container) return null
    const cr = chip.getBoundingClientRect()
    const co = container.getBoundingClientRect()
    return {
      chipIndex,
      x: cr.left - co.left + cr.width / 2,
      y: cr.top  - co.top  - 28,
    }
  }).filter(Boolean)
}

function About() {
  const [truckPos, setTruckPos]           = useState({ x: 0, y: 0 })
  const [facingEast, setFacingEast]       = useState(true)
  const [activeChipIndex, setActiveChipIndex] = useState(0)
  const [visitOrder, setVisitOrder]       = useState(STATES_48.map((_, i) => i))

  const chipRefs     = useRef([])
  const containerRef = useRef(null)
  const rafRef       = useRef(null)
  const progressRef  = useRef(0)
  const lastTimeRef  = useRef(null)

  useLayoutEffect(() => {
    setVisitOrder(buildSnakeOrder(chipRefs.current))
  }, [])

  useEffect(() => {
    const positions = getChipPositions(visitOrder, chipRefs, containerRef)
    if (positions.length < 2) return

    // Pre-compute cumulative distances along the snake path
    const distances = [0]
    for (let i = 1; i < positions.length; i++) {
      const dx = positions[i].x - positions[i - 1].x
      const dy = positions[i].y - positions[i - 1].y
      distances.push(distances[i - 1] + Math.sqrt(dx * dx + dy * dy))
    }
    const totalDistance = distances[distances.length - 1]

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp
      const dt = Math.min(timestamp - lastTimeRef.current, 50)
      lastTimeRef.current = timestamp

      progressRef.current = (progressRef.current + SPEED * dt / 1000) % totalDistance

      // Find current segment via linear scan (48 points, fast enough)
      let seg = 0
      for (let i = 1; i < distances.length; i++) {
        if (distances[i] > progressRef.current) { seg = i - 1; break }
        seg = i - 1
      }
      const next = (seg + 1) % positions.length
      const segLen = distances[seg + 1] - distances[seg]
      const t = segLen > 0 ? (progressRef.current - distances[seg]) / segLen : 0

      const x = positions[seg].x + (positions[next].x - positions[seg].x) * t
      const y = positions[seg].y + (positions[next].y - positions[seg].y) * t
      const dx = positions[next].x - positions[seg].x

      setTruckPos({ x, y })
      setFacingEast(dx >= 0)
      setActiveChipIndex(positions[seg].chipIndex)

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(rafRef.current)
      lastTimeRef.current = null
    }
  }, [visitOrder])

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

          <div className="states-container" ref={containerRef}>
            <div
              className="states-truck"
              style={{ transform: `translate(${truckPos.x}px, ${truckPos.y}px)` }}
              aria-hidden="true"
            >
              <span className={`truck-emoji ${facingEast ? 'east' : ''}`}>🚚</span>
            </div>

            <div className="states-grid">
              {STATES_48.map((state, i) => (
                <span
                  key={state}
                  ref={el => chipRefs.current[i] = el}
                  className={`state-chip ${i === activeChipIndex ? 'active' : ''}`}
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
