function Hero() {
  return (
    <section id="top" className="scroll-mt-20 bg-canvas text-ink">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-8 lg:py-28">
        <div className="min-w-0">
          <p className="hero-enter hero-step-1 text-xs font-medium tracking-wide text-muted sm:text-sm">
            Milan Stanojević / Belgrade, Serbia
          </p>
          <p className="hero-enter hero-step-1 mt-6 text-sm font-medium text-accent">
            Frontend-focused Full-Stack Developer
          </p>
          <p className="hero-enter hero-step-1 mt-2 flex items-start gap-2 text-xs leading-5 text-muted">
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>Open to Frontend &amp; Full-Stack opportunities</span>
          </p>
          <h1 className="hero-enter hero-step-2 mt-4 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            I build modern web applications that feel considered.
          </h1>
          <p className="hero-enter hero-step-3 mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            React and TypeScript developer with 4 years of professional experience
            building enterprise web applications, reusable UI systems and
            full-stack product features.
          </p>
          <div className="hero-enter hero-step-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center rounded-lg bg-ink px-5 py-3 text-sm font-medium text-surface no-underline transition-colors hover:bg-dark-secondary"
            >
              View selected work <span className="motion-arrow arrow-down">↓</span>
            </a>
            <a
              href="https://github.com/milanNbg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex min-h-12 items-center px-3 py-3 text-sm font-medium no-underline transition-colors hover:text-accent"
            >
              GitHub <span className="motion-arrow arrow-diagonal">↗</span>
            </a>
          </div>
          <p className="hero-enter hero-step-3 mt-7 text-xs leading-6 text-muted sm:text-sm">
            React · TypeScript · UI Engineering · Full-Stack
          </p>
        </div>

        <figure className="hero-enter hero-step-4 min-w-0 w-full max-w-xl justify-self-center rounded-2xl border border-line bg-surface shadow-sm">
          <div className="flex h-10 items-center gap-1.5 rounded-t-2xl border-b border-line px-4" aria-hidden="true">
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
          </div>
          <img
            src="/projects/fluxo/dashboard.png"
            alt="Fluxo personal finance dashboard"
            className="aspect-[4/3] w-full object-cover object-top"
          />
          <figcaption className="border-t border-line p-5">
            <p className="text-xs font-medium text-muted">Featured project</p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-lg font-semibold tracking-tight">Fluxo</p>
              <p className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-ink">
                Full-Stack + AI
              </p>
            </div>
            <p className="mt-3 text-xs leading-5 text-muted">
              React · TypeScript · Fastify · PostgreSQL
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
