import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import bee from "../../../public/bee.png"

const AutonomousBee = ({ id, delay = 0 }) => {
  const [screenDimensions, setScreenDimensions] = useState({ width: 1200, height: 800 })
  
  useEffect(() => {
    const updateDimensions = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Generar puntos de waypoint aleatorios para cada abeja
  const generateWaypoints = () => {
    const numPoints = 6 + Math.floor(Math.random() * 4) // 6-9 puntos
    const points = []
    const margin = 100
    
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: margin + Math.random() * (screenDimensions.width - margin * 2),
        y: margin + Math.random() * (screenDimensions.height - margin * 2)
      })
    }
    return points
  }

  const waypoints = generateWaypoints()
  
  // Crear path de movimiento más natural
  const createBezierPath = () => {
    const pathX = []
    const pathY = []
    
    waypoints.forEach((point, index) => {
      // Agregar variación en el camino
      const variance = 50 + Math.random() * 100
      const offsetX = (Math.random() - 0.5) * variance
      const offsetY = (Math.random() - 0.5) * variance
      
      pathX.push(point.x + offsetX)
      pathY.push(point.y + offsetY)
    })
    
    return { pathX, pathY }
  }

  const { pathX, pathY } = createBezierPath()

  // Comportamientos específicos para cada abeja
  const beePersonality = {
    speed: 8 + Math.random() * 6, // Velocidad entre 8-14 segundos
    pauseDuration: 1 + Math.random() * 3, // Pausas de 1-4 segundos
    explorationRadius: 30 + Math.random() * 70, // Radio de exploración
    activity: Math.random() > 0.3 ? 'explorer' : 'collector' // Tipo de comportamiento
  }

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{
        x: pathX[0],
        y: pathY[0],
        scale: 0,
        opacity: 0
      }}
      animate={{
        x: pathX,
        y: pathY,
        scale: [0, 1, 1, 1],
        opacity: [0, 1, 1, 1]
      }}
      transition={{
        delay: delay,
        duration: beePersonality.speed,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1],
        x: {
          duration: beePersonality.speed,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: beePersonality.speed,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
    >
      {/* Abeja con movimientos de vuelo realistas */}
      <motion.div
        animate={{
          rotate: [0, 15, -15, 0],
          x: [0, 10, -10, 0],
          y: [0, -5, 5, 0]
        }}
        transition={{
          duration: 1.5 + Math.random() * 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.img
          src={bee} 
          alt="Abeja autónoma"
          className="w-6 h-6 object-contain"
          animate={{ 
            rotate: [0, 8, -8, 0],
            scale: [1, 1.15, 0.95, 1],
            filter: beePersonality.activity === 'collector' 
              ? ['hue-rotate(0deg)', 'hue-rotate(20deg)', 'hue-rotate(0deg)']
              : ['hue-rotate(0deg)', 'hue-rotate(-10deg)', 'hue-rotate(0deg)']
          }}
          transition={{ 
            duration: 0.6 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Estela de la abeja */}
        <motion.div
          className="absolute -z-10 w-8 h-1 bg-gradient-to-r from-[#FFD700] to-transparent rounded-full opacity-30"
          style={{
            left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleX: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Comportamiento especial: recolección de polen */}
      {beePersonality.activity === 'collector' && (
        <motion.div
          className="absolute w-2 h-2 bg-[#FFD700] rounded-full opacity-60"
          style={{
            left: '-5px',
            top: '-5px'
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  )
}

export default AutonomousBee