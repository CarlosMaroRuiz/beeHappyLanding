import { motion, useTransform, useScroll } from "framer-motion"
import { useScrollParallax } from "../../hooks/useScrollParallax"

// Componente para elementos que se mueven con parallax
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  direction = 'vertical',
  className = "",
  ...props 
}) => {
  const { scrollY } = useScrollParallax()
  
  const transform = direction === 'vertical' 
    ? { y: scrollY * speed }
    : { x: scrollY * speed }

  return (
    <motion.div
      className={className}
      style={transform}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Componente para backgrounds con parallax
export const ParallaxBackground = ({ 
  children, 
  speed = 0.3,
  className = "absolute inset-0",
  ...props 
}) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <motion.div
      className={className}
      style={{ y }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Floating elements que se mueven suavemente
export const FloatingParallax = ({ 
  children, 
  intensity = 20,
  duration = 8,
  className = "",
  ...props 
}) => {
  const { scrollY } = useScrollParallax()

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, intensity, 0],
        x: [0, intensity * 0.5, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        transform: `translateY(${scrollY * 0.1}px)`
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Efecto de profundidad con múltiples capas
export const DepthLayer = ({ 
  layer = 1, 
  children, 
  className = "",
  ...props 
}) => {
  const { scrollY } = useScrollParallax()
  const speed = layer * 0.1 // Capas más profundas se mueven más lento
  
  return (
    <motion.div
      className={`${className} relative`}
      style={{
        transform: `translate3d(0, ${scrollY * speed}px, 0)`,
        zIndex: 10 - layer // Capas más profundas tienen menor z-index
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}