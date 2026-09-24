const roles = [
  {
    title: 'Medior Full-Stack Developer',
    period: 'Aug 2024 — Apr 2026',
    summary:
      'Developed enterprise React and TypeScript features for a B2B HR and payroll SaaS platform, with a strong focus on reusable UI architecture, complex workflows and maintainable frontend code.',
    highlights: [
      'Built reusable interfaces with React, TypeScript, Material UI and SCSS.',
      'Integrated frontend features with REST and GraphQL APIs.',
      'Delivered responsive, pixel-accurate UI based on Figma specifications and shared design-system guidelines.',
      'Wrote and maintained unit, integration and end-to-end tests using Jest, React Testing Library and Playwright.',
    ],
    technologies:
      'React · TypeScript · MUI · SCSS · REST · GraphQL · Jest · Playwright · ASP.NET Core · SQL Server',
  },
  {
    title: 'Junior Full-Stack Developer',
    period: 'Nov 2022 — Aug 2024',
    summary:
      'Built responsive React interfaces, reusable form components and REST API integrations across enterprise HR applications.',
    highlights: [
      'Developed reusable UI components including inputs, dropdowns, modals and form controls.',
      'Integrated React applications with backend services through REST APIs and React Router.',
      'Built and maintained ASP.NET Core APIs with Dapper and SQL Server, with MSTest coverage.',
    ],
    technologies:
      'React · JavaScript · TypeScript · SCSS · React Router · ASP.NET Core · Dapper · SQL Server · MSTest',
  },
  {
    title: 'Software Development Intern',
    period: 'Jul 2022 — Nov 2022',
    summary:
      'Started my professional development journey by maintaining internal application workflows and resolving smaller UI and data-management tasks.',
    highlights: [
      'Assisted with internal UI forms and documentation-related features.',
      'Debugged Product Backlog Items including UI text changes and employee sorting behavior.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line bg-canvas text-ink">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-medium tracking-wide text-muted sm:text-sm">
          Experience
        </p>
        <h2 data-reveal className="mt-4 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          From internship to mid-level engineer.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
          Four years of professional experience building enterprise HR and payroll
          software, with a strong focus on React, TypeScript and frontend engineering.
        </p>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6 sm:mt-12 lg:mt-16">
          <div>
            <p className="text-2xl font-semibold tracking-tight">Paycor</p>
            <p className="mt-2 text-sm text-muted">B2B HR &amp; Payroll SaaS</p>
          </div>
          <p className="text-sm text-muted">2022 — 2026</p>
        </div>

        <ol data-reveal className="mt-8 ml-1 border-l border-line sm:mt-10">
          {roles.map((role) => (
            <li key={role.title} className="relative pb-10 pl-6 last:pb-0 sm:pb-12 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-1 size-2 rounded-full bg-muted"
              />
              <div className="grid min-w-0 gap-3 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10">
                <p className="text-sm leading-7 text-muted">{role.period}</p>
                <div className="min-w-0">
                  <h3 className="text-xl leading-7 font-semibold tracking-tight sm:text-2xl sm:leading-8">
                    {role.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                    {role.summary}
                  </p>
                  <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-base leading-7 text-muted marker:text-line">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="pl-1">{highlight}</li>
                    ))}
                  </ul>
                  {role.technologies && (
                    <p className="mt-5 max-w-3xl text-sm leading-6 text-muted">
                      {role.technologies}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
