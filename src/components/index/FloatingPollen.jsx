import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const FloatingPollen = ({ count = 15 }) => {
  const [screenSize, setScreenSize] = useState({ width: 1200, height: 800 })
  
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  // Ajustar cantidad según el tamaño de pantalla
  const responsiveCount = screenSize.width < 640 ? Math.ceil(count * 0.4) : 
                         screenSize.width < 768 ? Math.ceil(count * 0.6) : 
                         screenSize.width < 1024 ? Math.ceil(count * 0.8) : count

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ delay: 3, duration: 2 }}
    >
      {[...Array(responsiveCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: screenSize.width < 640 ? 1 + Math.random() * 2 : 1 + Math.random() * 3,
            height: screenSize.width < 640 ? 1 + Math.random() * 2 : 1 + Math.random() * 3,
            backgroundColor: Math.random() > 0.5 ? '#FFD700' : '#F4B400'
          }}
          initial={{
            x: Math.random() * screenSize.width,
            y: screenSize.height + 10,
            scale: 0
          }}
          animate={{
            y: -10,
            x: [
              Math.random() * screenSize.width,
              Math.random() * screenSize.width,
              Math.random() * screenSize.width
            ],
            scale: [0, 1, 0.5, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: screenSize.width < 768 ? 8 + Math.random() * 6 : 10 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  )
}

export default FloatingPollen