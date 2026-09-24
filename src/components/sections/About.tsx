const toolkitGroups = [
  {
    name: 'FRONTEND',
    technologies: ['React', 'TypeScript', 'JavaScript', 'React Router', 'HTML5', 'CSS / SCSS', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'STATE & DATA',
    technologies: ['Redux Toolkit', 'RTK Query', 'React Context', 'useReducer', 'React Hook Form', 'Zod', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'TESTING',
    technologies: ['Jest', 'React Testing Library', 'Vitest', 'Playwright', 'MSTest'],
  },
  {
    name: 'BACKEND',
    technologies: ['C#', 'ASP.NET Core', 'Node.js', 'Express', 'Fastify', 'Dapper', 'Prisma', 'SQL Server', 'PostgreSQL', 'SQLite'],
  },
  {
    name: 'TOOLING & DELIVERY',
    technologies: ['Vite', 'Webpack', 'Git', 'GitHub Actions', 'Azure DevOps', 'CI/CD', 'pnpm', 'Turborepo', 'Docker'],
  },
]

function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-canvas text-ink">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-medium tracking-wide text-muted sm:text-sm">
          About
        </p>
        <h2 data-reveal className="mt-4 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          A little about how I work.
        </h2>

        <div className="mt-10 grid items-start gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
          <div data-reveal className="min-w-0 max-w-xl space-y-6 text-base leading-8 text-muted">
            <p>
              I'm a frontend-focused Full-Stack Developer based in Belgrade, Serbia,
              with professional experience building enterprise B2B SaaS applications.
            </p>
            <p>
              My main focus is React and TypeScript, with particular interest in
              reusable UI architecture, responsive interfaces, state management,
              API integration, accessibility and frontend testing.
            </p>
            <p>
              I enjoy understanding how systems work beneath framework abstractions
              — from browser behavior and HTTP flows to application state, API
              boundaries and backend persistence.
            </p>
            <p>
              Alongside my professional work, I build independent projects to
              explore technologies and architectural patterns beyond my day-to-day
              stack, including modern React, Node.js, Fastify, PostgreSQL, browser
              Media APIs and AI integrations.
            </p>
          </div>

          <div data-reveal className="min-w-0">
            <h3 className="text-xl font-semibold tracking-tight">Core toolkit</h3>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {toolkitGroups.map((group) => (
                <div key={group.name} className="py-4">
                  <h4 className="font-mono text-xs font-medium tracking-wide">
                    {group.name}
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm leading-6 text-muted">
                    {group.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-reveal className="mt-12 border-t border-line pt-8 lg:mt-16">
          <h3 className="text-lg font-semibold tracking-tight">Education</h3>
          <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <h4 className="text-base leading-7 font-medium">
                Master of Science in Information Technology
              </h4>
              <p className="mt-2 text-sm leading-6 text-muted">
                Part-time · 2021 — Present
              </p>
              <p className="text-sm leading-6 text-muted">
                Information Technology School, Belgrade
              </p>
            </div>
            <div className="min-w-0">
              <h4 className="text-base leading-7 font-medium">
                Bachelor of Science in Information Technology
              </h4>
              <p className="mt-2 text-sm leading-6 text-muted">2014 — 2018</p>
              <p className="text-sm leading-6 text-muted">
                Information Technology School, Belgrade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
