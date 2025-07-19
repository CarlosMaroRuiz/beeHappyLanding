import { motion } from "framer-motion"

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

export default HexagonFloat