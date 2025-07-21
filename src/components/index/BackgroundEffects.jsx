import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import HexagonFloat from "./HexagonFloat"
import AutonomousBee from "./AutonomousBee"
import FloatingPollen from "./FloatingPollen"
import QueenBeeFollower from "./QueenBeeFollower"

const BackgroundEffects = () => {
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

  // Ajustar cantidad de elementos según el tamaño de pantalla
  const hexagonCount = screenSize.width < 640 ? 4 : 
                      screenSize.width < 1024 ? 6 : 8
  
  const beeCount = screenSize.width < 640 ? 3 : 
                  screenSize.width < 1024 ? 4 : 6
  
  const pollenCount = screenSize.width < 640 ? 8 : 
                     screenSize.width < 1024 ? 12 : 15

  return (
    <>
      {/* Hexágonos flotantes de fondo - cantidad responsive */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(hexagonCount)].map((_, i) => (
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
              size={screenSize.width < 640 ? 
                    10 + Math.random() * 15 : // Más pequeños en móvil
                    15 + Math.random() * 25   // Tamaño normal
                  }
            />
          </div>
        ))}
      </div>

      {/* Abejas autónomas - cantidad y comportamiento responsive */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        {[...Array(beeCount)].map((_, i) => (
          <AutonomousBee
            key={i}
            id={i}
            delay={i * 1.5 + Math.random() * 2}
          />
        ))}
      </motion.div>

      {/* Efecto de polen flotante responsive */}
      <FloatingPollen count={pollenCount} />

      {/* Abeja Reina que sigue el mouse - solo en desktop */}
      {screenSize.width >= 1024 && <QueenBeeFollower />}
    </>
  )
}

export default BackgroundEffects