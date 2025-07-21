import "../../styles/HeroSection.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-screen flex hero-background pt-10 w-full">
      {/* Overlay gradiente */}
      <div className="absolute z-10"></div>

      {/* Contenido */}
      <div className="flex flex-col z-30 max-w-4xl px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-black"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ¿Qué es BeeHappy?
        </motion.h1>
        {/*Aplicas padding */}
<div className="w-screen px-40">
<motion.div
          className="frosted-glass mt-20 "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-8xl md:text-4xl text-gray-800 leading-relaxed font-medium">
            Es un sistema tecnológico diseñado para modernizar la apicultura, facilitando a los
            apicultores el monitoreo remoto de sus colmenas y mejorando la toma de decisiones para
            el cuidado eficiente de las abejas.
          </p>
        </motion.div>
</div>
        
      </div>
    </div>
  );
};

export default HeroSection;