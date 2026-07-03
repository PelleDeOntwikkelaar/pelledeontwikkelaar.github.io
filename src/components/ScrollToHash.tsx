import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_OFFSET = 80

/**
 * Drives scroll on route/hash change so deep links (/services#advisory) and
 * cross-page contact jumps (/#contact) land in the right place under the
 * sticky nav. With no hash, a route change scrolls to the top.
 */
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // Wait a frame so the destination route has mounted and laid out.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          const top =
            el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
          window.scrollTo({ top, behavior: 'smooth' })
        }
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash, key])

  return null
}
