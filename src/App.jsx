import { motion } from "framer-motion"
import Layout from './components/Layout'
import IndexPage from "./views/IndexPage"
import WhatThisPage from "./views/WhatThisPage"
import { ParallaxElement, ParallaxBackground, FloatingParallax } from './components/effects/ParallaxElements'
import ScrollReveal, { FadeInUp } from './components/effects/ScrollReveal'
import { useScrollParallax } from './hooks/useScrollParallax'

function App() {
  const { scrollY, scrollProgress } = useScrollParallax()

  return (
    <Layout>
 
      <ParallaxBackground speed={0.2} className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#F4B400] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#005076] rounded-full opacity-5 blur-3xl"></div>
        
        {/* Elementos flotantes decorativos */}
        <FloatingParallax intensity={10} duration={12} className="absolute top-20 right-20">
          <div className="w-6 h-6 border-2 border-[#F4B400] rounded-full opacity-20"></div>
        </FloatingParallax>
        
        <FloatingParallax intensity={15} duration={8} className="absolute bottom-32 left-20">
          <div className="w-4 h-4 bg-[#005076] rounded-full opacity-15"></div>
        </FloatingParallax>
      </ParallaxBackground>

      {/* Sección Principal (Hero) */}
      <section id="home" className="relative z-10">
        <FadeInUp>
          <IndexPage />
        </FadeInUp>
      </section>

      <section id="what" className="relative z-10">
        <ParallaxElement speed={-0.1}>
          <motion.div
            style={{
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          >
            <FadeInUp delay={0.2}>
              <WhatThisPage />
            </FadeInUp>
          </motion.div>
        </ParallaxElement>

        {/* Elementos decorativos específicos para esta sección */}
        <ParallaxElement speed={0.3} className="absolute top-20 right-10 pointer-events-none">
          <motion.div 
            className="w-16 h-16 border-2 border-[#F4B400] rounded-full opacity-20"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </ParallaxElement>

        <ParallaxElement speed={-0.2} className="absolute bottom-40 left-10 pointer-events-none">
          <motion.div 
            className="w-12 h-12 bg-[#005076] rounded-full opacity-10 blur-sm"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </ParallaxElement>
      </section>
    </Layout>
  )
}

export default App