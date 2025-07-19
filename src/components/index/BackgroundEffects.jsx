import { motion } from "framer-motion"
import HexagonFloat from "./HexagonFloat"
import AutonomousBee from "./AutonomousBee"
import FloatingPollen from "./FloatingPollen"

const BackgroundEffects = () => {
  return (
    <>
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
      <FloatingPollen count={15} />
    </>
  )
}

export default BackgroundEffects