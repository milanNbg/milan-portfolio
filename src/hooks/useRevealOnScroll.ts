import { useEffect } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (preference.matches || !('IntersectionObserver' in window)) return

    const animations = new Set<Animation>()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        if (preference.matches || !entry.target.animate) continue
        entry.target.classList.add('is-revealed')
        const animation = entry.target.animate(
          [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 500, easing: 'ease-out' },
        )
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      }
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    function stopMotion() {
      if (!preference.matches) return
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      animations.clear()
    }
    function revealFocusedContent(event: FocusEvent) {
      if (!(event.target instanceof Element)) return
      const block = event.target.closest('[data-reveal]')
      if (!block) return
      observer.unobserve(block)
      block.getAnimations().forEach((animation) => animation.cancel())
    }
    preference.addEventListener('change', stopMotion)
    document.addEventListener('focusin', revealFocusedContent)
    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      preference.removeEventListener('change', stopMotion)
      document.removeEventListener('focusin', revealFocusedContent)
    }
  }, [])
}
