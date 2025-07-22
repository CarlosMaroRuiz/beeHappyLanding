import { motion } from "framer-motion"
import { useScrollReveal } from "../../hooks/useScrollParallax"

const ScrollReveal = ({ 
  children, 
  direction = 'up',
  distance = 60,
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  className = "",
  ...props 
}) => {
  const [ref, isVisible] = useScrollReveal(threshold)

  const getInitialVariant = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      case 'scale':
        return { scale: 0.8, opacity: 0 }
      case 'fade':
        return { opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimateVariant = () => {
    switch (direction) {
      case 'scale':
        return { scale: 1, opacity: 1 }
      case 'fade':
        return { opacity: 1 }
      default:
        return { x: 0, y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialVariant()}
      animate={isVisible ? getAnimateVariant() : getInitialVariant()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Variantes predefinidas para casos comunes
export const FadeInUp = ({ children, ...props }) => (
  <ScrollReveal direction="up" {...props}>
    {children}
  </ScrollReveal>
)

export const FadeInDown = ({ children, ...props }) => (
  <ScrollReveal direction="down" {...props}>
    {children}
  </ScrollReveal>
)

export const FadeInLeft = ({ children, ...props }) => (
  <ScrollReveal direction="left" {...props}>
    {children}
  </ScrollReveal>
)

export const FadeInRight = ({ children, ...props }) => (
  <ScrollReveal direction="right" {...props}>
    {children}
  </ScrollReveal>
)

export const ScaleIn = ({ children, ...props }) => (
  <ScrollReveal direction="scale" {...props}>
    {children}
  </ScrollReveal>
)

export const FadeIn = ({ children, ...props }) => (
  <ScrollReveal direction="fade" {...props}>
    {children}
  </ScrollReveal>
)

export default ScrollReveal