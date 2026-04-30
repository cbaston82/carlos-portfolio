import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'PHP', 'Java', 'HTML', 'CSS', 'Sass'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Vue.js', 'Angular', 'jQuery', 'Webpack', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Laravel', 'Spring Framework', 'REST APIs'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'RethinkDB'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'NPM', 'Composer', 'WordPress', 'Linux'],
  },
  {
    category: 'AI & Integrations',
    skills: ['Claude API', 'OpenAI API', 'Prompt Engineering', 'AI-assisted Development'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <h2 className="section-heading">Tech Stack</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
