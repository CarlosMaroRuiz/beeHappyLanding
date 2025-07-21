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

  // Generar puntos de waypoint aleatorios adaptados al tamaño de pantalla
  const generateWaypoints = () => {
    const isMobile = screenDimensions.width < 640
    const isTablet = screenDimensions.width < 1024
    
    // Menos puntos en dispositivos móviles para mejor rendimiento
    const numPoints = isMobile ? 4 + Math.floor(Math.random() * 2) : // 4-5 puntos
                     isTablet ? 5 + Math.floor(Math.random() * 3) :   // 5-7 puntos  
                     6 + Math.floor(Math.random() * 4)                // 6-9 puntos
    
    const points = []
    const margin = isMobile ? 50 : isTablet ? 75 : 100
    
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: margin + Math.random() * (screenDimensions.width - margin * 2),
        y: margin + Math.random() * (screenDimensions.height - margin * 2)
      })
    }
    return points
  }

  const waypoints = generateWaypoints()
  
  // Crear path de movimiento más natural con ajustes responsive
  const createBezierPath = () => {
    const pathX = []
    const pathY = []
    const isMobile = screenDimensions.width < 640
    
    waypoints.forEach((point, index) => {
      // Menos variación en móviles para movimientos más suaves
      const variance = isMobile ? 30 + Math.random() * 50 : 50 + Math.random() * 100
      const offsetX = (Math.random() - 0.5) * variance
      const offsetY = (Math.random() - 0.5) * variance
      
      pathX.push(point.x + offsetX)
      pathY.push(point.y + offsetY)
    })
    
    return { pathX, pathY }
  }

  const { pathX, pathY } = createBezierPath()

  // Comportamientos específicos adaptados al dispositivo
  const beePersonality = {
    speed: screenDimensions.width < 640 ? 6 + Math.random() * 4 : // Más rápido en móvil
           screenDimensions.width < 1024 ? 7 + Math.random() * 5 : // Intermedio en tablet
           8 + Math.random() * 6, // Velocidad normal en desktop
    pauseDuration: 1 + Math.random() * 3,
    explorationRadius: screenDimensions.width < 640 ? 20 + Math.random() * 40 :
                      screenDimensions.width < 1024 ? 25 + Math.random() * 55 :
                      30 + Math.random() * 70,
    activity: Math.random() > 0.3 ? 'explorer' : 'collector'
  }

  // Tamaño de abeja responsive
  const beeSize = screenDimensions.width < 640 ? 'w-4 h-4' :
                 screenDimensions.width < 1024 ? 'w-5 h-5' : 'w-6 h-6'

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
          className={`${beeSize} object-contain`}
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
        
        {/* Estela de la abeja - responsive */}
        <motion.div
          className={`absolute -z-10 ${
            screenDimensions.width < 640 ? 'w-4 h-0.5' : 
            screenDimensions.width < 1024 ? 'w-6 h-0.5' : 'w-8 h-1'
          } bg-gradient-to-r from-[#FFD700] to-transparent rounded-full opacity-30`}
          style={{
            left: screenDimensions.width < 640 ? '-10px' : '-20px',
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

      {/* Comportamiento especial: recolección de polen - responsive */}
      {beePersonality.activity === 'collector' && (
        <motion.div
          className={`absolute ${
            screenDimensions.width < 640 ? 'w-1 h-1' : 'w-2 h-2'
          } bg-[#FFD700] rounded-full opacity-60`}
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