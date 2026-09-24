function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-dark text-white">
      <div data-reveal className="mx-auto grid max-w-[1200px] items-end gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-28">
        <div className="min-w-0">
          <p className="text-xs font-medium tracking-wide text-white/60 sm:text-sm">
            Contact
          </p>
          <h2 className="mt-4 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something thoughtful.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-8 text-white/70">
            <p>
              I'm interested in frontend and full-stack opportunities where I can
              work on modern web products, complex interfaces and well-designed
              user experiences.
            </p>
            <p>
              If you're looking for a React and TypeScript developer with
              enterprise experience and a strong frontend focus, feel free to get
              in touch.
            </p>
          </div>
          <a
            href="mailto:milan.nbg95@gmail.com"
            className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-surface px-6 py-3 text-base font-semibold text-ink no-underline transition-colors hover:bg-canvas focus-visible:outline-white"
          >
            Email me <span className="motion-arrow arrow-right">→</span>
          </a>
        </div>

        <div className="min-w-0 border-t border-white/15 pt-6 lg:pb-1">
          <a
            href="mailto:milan.nbg95@gmail.com"
            className="inline-block max-w-full py-3 text-base font-medium wrap-anywhere no-underline transition-colors hover:text-white/70 focus-visible:outline-white"
          >
            milan.nbg95@gmail.com
          </a>
          <ul className="mt-3 flex flex-col items-start gap-1">
            <li>
              <a
                href="https://www.linkedin.com/in/milanstanojević"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-12 items-center py-3 text-sm font-medium text-white/70 no-underline transition-colors hover:text-white focus-visible:outline-white"
              >
                LinkedIn <span className="motion-arrow arrow-diagonal">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/milanNbg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-12 items-center py-3 text-sm font-medium text-white/70 no-underline transition-colors hover:text-white focus-visible:outline-white"
              >
                GitHub <span className="motion-arrow arrow-diagonal">↗</span>
              </a>
            </li>
            <li>
              <a
                href="/Milan_Stanojevic_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-12 items-center py-3 text-sm font-medium text-white/70 no-underline transition-colors hover:text-white focus-visible:outline-white"
              >
                Download CV <span className="motion-arrow arrow-down">↓</span>
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm leading-6 text-white/60">Belgrade, Serbia</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
