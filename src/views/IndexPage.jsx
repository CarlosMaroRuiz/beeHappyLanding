import { motion } from "framer-motion"
import Header from "../components/index/Header"
import HeroSection from "../components/index/HeroSection"
import BackgroundEffects from "../components/index/BackgroundEffects"
import { 
  containerVariants, 
  headerVariants, 
  heroVariants 
} from "../components/index/animationVariants"

const IndexPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-[#F5E6D3] relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
   
      <motion.div variants={headerVariants}>
        <Header/>
      </motion.div>
      
      <main>
     
        <motion.div variants={heroVariants}>
          <HeroSection/>
        </motion.div>
      </main>


      <BackgroundEffects />
    </motion.div>
  )
}

export default IndexPage