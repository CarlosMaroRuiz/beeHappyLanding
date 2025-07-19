import { motion } from "framer-motion"

const FloatingPollen = ({ count = 15 }) => {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ delay: 3, duration: 2 }}
    >
      {[...Array(count)].map((_, i) => (
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
  )
}

export default FloatingPollen