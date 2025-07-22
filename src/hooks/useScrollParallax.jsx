import { useState, useEffect } from 'react'

export const useScrollParallax = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollValues = () => {
      const currentScrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      
      setScrollY(currentScrollY)
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setScrollProgress(currentScrollY / documentHeight)
      
      lastScrollY = currentScrollY
    }

    const handleScroll = () => {
      requestAnimationFrame(updateScrollValues)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, scrollDirection, scrollProgress }
}

export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState(null)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    observer.observe(elementRef)
    return () => observer.disconnect()
  }, [elementRef, threshold])

  return [setElementRef, isVisible]
}