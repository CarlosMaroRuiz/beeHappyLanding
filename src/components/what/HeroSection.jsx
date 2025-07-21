import { motion } from "framer-motion";
import backgroundImage from "../../assets/WhatThisBackground.png"; // Ajusta la ruta según la ubicación de la imagen

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <img 
        src={backgroundImage}
        alt="Panal de abejas - BeeHappy"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
        onLoad={() => {}}
      />
      
      {/* Fallback background con gradiente si la imagen no carga */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4B400] via-[#E6A000] to-[#D4940A] z-0"></div>
      
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      
      {/* Contenido principal */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ¿Qué es BeeHappy?
        </motion.h1>
        
        <motion.div 
          className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            Es un sistema tecnológico diseñado para modernizar la apicultura, facilitando a los 
            apicultores el monitoreo remoto de sus colmenas y mejorando la toma de decisiones para 
            el cuidado eficiente de las abejas.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;