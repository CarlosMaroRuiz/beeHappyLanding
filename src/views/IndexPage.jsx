import { motion } from "framer-motion"
import HeroSection from "../components/index/HeroSection"
import BackgroundEffects from "../components/index/BackgroundEffects"
import { 
  containerVariants, 
  heroVariants 
} from "../components/index/animationVariants"

const IndexPage = () => {
  return (
    <motion.div 
      className="relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main content responsive */}
      <div className="pb-8 sm:pb-12 md:pb-16">
        <motion.div variants={heroVariants}>
          <HeroSection/>
        </motion.div>
      </div>

      {/* Background effects - se ajustan automáticamente */}
      <BackgroundEffects />
    </motion.div>
  )
}

export default IndexPage