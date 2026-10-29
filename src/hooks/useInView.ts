import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export const useInView = <T extends Element>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: UseInViewOptions = {}) => {
  const ref = useRef<T>(null)
  const supportsObserver = typeof IntersectionObserver !== 'undefined'
  const [inView, setInView] = useState(!supportsObserver)

  useEffect(() => {
    const element = ref.current
    if (!element || !supportsObserver) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, supportsObserver])

  return { ref, inView }
}
