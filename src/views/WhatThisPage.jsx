import { motion } from "framer-motion"
import HeroSection from "../components/whatThis/HeroSection"


const WhatThisPage = () => {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
    </motion.div>
  )
}


export default WhatThisPage