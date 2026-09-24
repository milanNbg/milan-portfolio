function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line bg-canvas text-ink">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-medium tracking-wide text-muted sm:text-sm">
          Selected Work
        </p>
        <h2 data-reveal className="mt-4 max-w-3xl text-2xl leading-tight font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Projects where I explore frontend engineering, full-stack architecture
          and product development.
        </h2>

        <article data-reveal className="mt-10 grid items-start gap-8 sm:mt-12 lg:mt-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0 project-hover overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
            <img
              src="/projects/fluxo/dashboard.png"
              alt="Fluxo personal finance dashboard"
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>

          <div className="min-w-0">
            <p className="project-number font-mono text-xs text-muted">01</p>
            <h3 className="mt-3 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Fluxo
            </h3>
            <p className="mt-3 text-base leading-7 font-medium">
              AI-Powered Personal Finance Platform
            </p>
            <p className="mt-6 text-base leading-8 text-muted">
              A full-stack personal finance application for tracking transactions,
              monthly budgets and savings goals, with an AI assistant that provides
              contextual insights based on the user's financial data.
            </p>
            <p className="mt-5 text-sm leading-6 text-muted">
              React 19 · TypeScript · Redux Toolkit · RTK Query · Tailwind CSS ·
              Fastify · Prisma · PostgreSQL · Claude AI
            </p>

            <dl className="mt-8 divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="font-mono text-xs font-medium tracking-wide">
                  AI STREAMING
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Claude integration using Server-Sent Events for real-time
                  streamed responses.
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-mono text-xs font-medium tracking-wide">
                  AUTHENTICATION
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  JWT access tokens with HTTP-only refresh cookies, refresh
                  rotation and automatic session recovery.
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-mono text-xs font-medium tracking-wide">
                  ARCHITECTURE
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  pnpm/Turborepo monorepo with shared Zod schemas and TypeScript
                  types across frontend and backend.
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="https://fluxo-milan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-12 items-center py-3 text-sm font-semibold no-underline transition-colors hover:text-accent"
              >
                Live App <span className="motion-arrow arrow-diagonal">↗</span>
              </a>
              <a
                href="https://github.com/milanNbg/fluxo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-12 items-center py-3 text-sm font-semibold no-underline transition-colors hover:text-accent"
              >
                GitHub <span className="motion-arrow arrow-diagonal">↗</span>
              </a>
            </div>
          </div>
        </article>

        <article data-reveal className="mt-16 grid items-start gap-8 border-t border-line pt-16 sm:mt-20 sm:pt-20 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12 lg:pt-24">
          <div className="min-w-0 lg:order-last">
            <div className="project-hover overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
              <img
                src="/projects/peopleops/dashboard-light.png"
                alt="PeopleOps Admin Portal dashboard"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
            <div className="project-hover mt-4 ml-auto w-36 max-w-full overflow-hidden rounded-xl border border-line bg-surface shadow-sm sm:w-44 lg:w-52">
              <img
                src="/projects/peopleops/mobile-employees.png"
                width={498}
                height={950}
                alt="PeopleOps employee experience on mobile"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="min-w-0">
            <p className="project-number font-mono text-xs text-muted">02</p>
            <h3 className="mt-3 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              PeopleOps Admin Portal
            </h3>
            <p className="mt-3 text-base leading-7 font-medium">
              Enterprise People Operations Dashboard
            </p>
            <p className="mt-6 text-base leading-8 text-muted">
              A responsive React and TypeScript admin application inspired by
              real-world HR and People Operations workflows, focused on reusable
              UI architecture, accessibility, responsive design and testing.
            </p>
            <p className="mt-5 text-sm leading-6 text-muted">
              React 19 · TypeScript · React Router · SCSS · Vitest · React Testing
              Library · Playwright
            </p>

            <dl className="mt-8 divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="font-mono text-xs font-medium tracking-wide">
                  UI ARCHITECTURE
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Feature-based React structure with reusable UI components,
                  lightweight state management and service boundaries.
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-mono text-xs font-medium tracking-wide">
                  QUALITY
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Vitest, React Testing Library and Playwright coverage with GitHub 
                  Actions CI validation.
                </dd>
              </div>
              <div className="py-5">
                <dt className="font-mono text-xs font-medium tracking-wide">
                  ACCESSIBILITY
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted">
                  Semantic navigation, keyboard-friendly interactions, focus-aware
                  UI patterns and accessible application states.
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="https://peopleops-admin-portal.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-12 items-center py-3 text-sm font-semibold no-underline transition-colors hover:text-accent"
              >
                Live App <span className="motion-arrow arrow-diagonal">↗</span>
              </a>
              <a
                href="https://github.com/milanNbg/peopleops-admin-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-12 items-center py-3 text-sm font-semibold no-underline transition-colors hover:text-accent"
              >
                GitHub <span className="motion-arrow arrow-diagonal">↗</span>
              </a>
            </div>
          </div>
        </article>

        <article data-reveal className="mt-16 flex flex-col border-t border-line pt-16 sm:mt-20 sm:pt-20 lg:mt-24 lg:block lg:pt-24">
          <div className="mt-8 grid items-start gap-6 sm:mt-10 lg:mt-0 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <p className="project-number font-mono text-xs text-muted">03</p>
              <h3 className="mt-3 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Employee Management
              </h3>
              <p className="mt-3 text-base leading-7 font-medium">
                Full-Stack Employee Management &amp; Screen Recording
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-base leading-8 text-muted">
                A full-stack React and Express application for managing employee
                records, with SQLite persistence, runtime validation and
                browser-native screen sharing and recording.
              </p>
              <p className="mt-5 text-sm leading-6 text-muted">
                React · TypeScript · Express 5 · SQLite · Zod · MediaStream ·
                MediaRecorder
              </p>
              <a
                href="https://github.com/milanNbg/employee-management-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mt-4 inline-flex min-h-12 items-center py-3 text-sm font-semibold no-underline transition-colors hover:text-accent"
              >
                View Source <span className="motion-arrow arrow-diagonal">↗</span>
              </a>
            </div>
          </div>

          <div className="order-first grid items-start gap-6 lg:order-none lg:mt-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
            <div className="min-w-0 project-hover overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
              <img
                src="/projects/employee-management/employees.png"
                width={1919}
                height={1025}
                alt="Employee Management application showing the employee directory"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="min-w-0 project-hover overflow-hidden rounded-2xl border border-line bg-surface shadow-sm lg:mt-12">
              <img
                src="/projects/employee-management/screen-recorder.png"
                width={1919}
                height={1032}
                alt="Employee Management screen sharing and recording interface"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <dl className="mt-8 grid divide-y divide-line border-y border-line lg:mt-10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            <div className="py-5 lg:pr-6">
              <dt className="font-mono text-xs font-medium tracking-wide">
                FULL-STACK FLOW
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted">
                React client connected to an Express 5 REST API with SQLite
                persistence and a dedicated repository layer.
              </dd>
            </div>
            <div className="py-5 lg:px-6">
              <dt className="font-mono text-xs font-medium tracking-wide">
                VALIDATION &amp; DATA
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted">
                Zod validation for request payloads and database rows, with prepared
                SQLite statements and typed domain models.
              </dd>
            </div>
            <div className="py-5 lg:pl-6">
              <dt className="font-mono text-xs font-medium tracking-wide">
                BROWSER APIs
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted">
                Native screen sharing and recording with getDisplayMedia,
                MediaStream, MediaRecorder, Blob URLs and lifecycle cleanup.
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  )
}

export default SelectedWork
