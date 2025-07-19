import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Header from "../components/index/Header"
import HeroSection from "../components/index/HeroSection"
import bee from "../../public/bee.png"

const IndexPage = () => {
  // Animación principal del contenedor - más simple
  const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3
      }
    }
  }

  // Animación del header - entrada simple desde arriba
  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Animación del hero section - fade in simple
  const heroVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  // Componente de hexágono animado
  const HexagonFloat = ({ delay = 0, size = 20 }) => (
    <motion.div
      className="absolute border-2 border-[#F4B400] opacity-20"
      style={{
        width: size,
        height: size,
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
      }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: 0
      }}
      animate={{
        opacity: [0, 0.3, 0.1],
        scale: [0, 1, 0.8],
        rotate: 360,
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    />
  )

  // Componente de abeja autónoma
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

  return (
    <motion.div 
      className="min-h-screen bg-[#F5E6D3] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header con animación simple */}
      <motion.div variants={headerVariants}>
        <Header/>
      </motion.div>
      
      <main>
        {/* HeroSection con fade in simple */}
        <motion.div variants={heroVariants}>
          <HeroSection/>
        </motion.div>
      </main>

      {/* Hexágonos flotantes de fondo */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <HexagonFloat 
              delay={i * 0.5} 
              size={15 + Math.random() * 25}
            />
          </div>
        ))}
      </div>

      {/* Abejas autónomas con comportamientos únicos */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        {[...Array(6)].map((_, i) => (
          <AutonomousBee
            key={i}
            id={i}
            delay={i * 1.5 + Math.random() * 2}
          />
        ))}
      </motion.div>

      {/* Efecto de polen flotante mejorado */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3, duration: 2 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 1 + Math.random() * 3,
              height: 1 + Math.random() * 3,
              backgroundColor: Math.random() > 0.5 ? '#FFD700' : '#F4B400'
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
              scale: 0
            }}
            animate={{
              y: -10,
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              scale: [0, 1, 0.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default IndexPage