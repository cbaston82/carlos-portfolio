import { useState, useRef, useEffect } from 'react'
import './JokesTerminal.css'

const SAFE_CATEGORIES = [
  'animal', 'career', 'celebrity', 'dev', 'fashion',
  'food', 'history', 'money', 'movie', 'music',
  'political', 'religion', 'science', 'sport', 'travel',
]

function JokesTerminal() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [lines, setLines]         = useState([
    { type: 'info', text: '# Try it — fetch a random Chuck Norris joke, or enter a name to make it about someone else.' },
  ])
  const [loading, setLoading] = useState(false)
  const outputRef = useRef(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [lines])

  async function fetchJoke() {
    const hasName = firstName.trim() && lastName.trim()
    const command = hasName ? `norris ${firstName.trim()} ${lastName.trim()}` : 'norris'

    setLines(prev => [...prev, { type: 'command', text: `$ ${command}` }])
    setLoading(true)

    try {
      const category = SAFE_CATEGORIES[Math.floor(Math.random() * SAFE_CATEGORIES.length)]
      const res  = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      const data = await res.json()
      let joke   = data.value

      if (hasName) {
        joke = joke.replace(/Chuck Norris/g, `${firstName.trim()} ${lastName.trim()}`)
      }

      setLines(prev => [...prev, { type: 'output', text: joke }])
    } catch {
      setLines(prev => [...prev, { type: 'error', text: 'Error: failed to fetch joke. Check your connection.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !loading) fetchJoke()
  }

  function handleClear() {
    setLines([{ type: 'info', text: '# Terminal cleared.' }])
  }

  return (
    <div className="jokes-terminal">
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="terminal-title">chuck-norris.sh</span>
        <button className="terminal-clear" onClick={handleClear} title="Clear terminal">clear</button>
      </div>

      <div className="terminal-output" ref={outputRef}>
        {lines.map((line, i) => (
          <div key={i} className={`terminal-line terminal-${line.type}`}>{line.text}</div>
        ))}
        {loading && <div className="terminal-line terminal-loading">fetching joke<span className="ellipsis" /></div>}
      </div>

      <div className="terminal-input-row">
        <span className="terminal-prompt">$</span>
        <span className="terminal-cmd">norris</span>
        <input
          className="terminal-name-input"
          type="text"
          placeholder="firstname"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <input
          className="terminal-name-input"
          type="text"
          placeholder="lastname"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button className="terminal-run-btn" onClick={fetchJoke} disabled={loading}>
          {loading ? '...' : 'Run'}
        </button>
      </div>
    </div>
  )
}

export default JokesTerminal
