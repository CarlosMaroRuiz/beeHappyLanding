import { motion } from "framer-motion"
import HeroSection from "../components/what/HeroSection"

const WhatThisPage = () => {
  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-28" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
    </motion.div>
  )
}

export default WhatThisPage