import { useEffect, useState } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [footerClearance, setFooterClearance] = useState(0)

  useEffect(() => {
    const footer = document.querySelector('footer')
    function updateVisibility() {
      setIsVisible(window.scrollY >= 700)
      setFooterClearance(footer ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top) : 0)
    }
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  return (
    <a
      href="#top"
      tabIndex={isVisible ? undefined : -1}
      aria-hidden={!isVisible}
      style={footerClearance > 0 ? { bottom: `calc(${footerClearance}px + 1.5rem)` } : undefined}
      className={`back-to-top fixed right-3 bottom-3 z-40 inline-flex min-h-11 items-center gap-1 rounded-lg border border-line bg-surface px-3 py-2 text-xs font-medium text-ink shadow-sm sm:right-6 sm:bottom-6 sm:px-4 sm:text-sm ${isVisible ? 'is-visible' : ''}`}
    >
      <span className="md:hidden">Top</span>
      <span className="hidden md:inline">Back to top</span>
      <span className="motion-arrow arrow-up">↑</span>
    </a>
  )
}

export default BackToTop
