import "../../styles/HeroSection.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imágenes para alternar
  const backgroundImages = [
    '/img/index/9.png',
     '/img/index/10.jpg',
    '/img/index/11.jpg'
  ];

  // Seguimiento del mouse para efecto parallax solo horizontal
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      setMousePosition({ x: x * 30 }); // Solo movimiento horizontal, más intenso
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Alternar imágenes automáticamente cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Cambia cada 4 segundos (más rápido)

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="h-screen flex relative pt-10 w-full overflow-hidden">
      {/* Imágenes de fondo animadas que se alternan */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "120%", // Más grande para permitir movimiento lateral
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ 
            scale: 1, 
            x: 0,
            opacity: index === 0 ? 1 : 0 // Solo la primera imagen visible inicialmente
          }}
          animate={{
            // Animación automática de respiración
            scale: [1, 1.05, 1],
            // Movimiento solo hacia los lados
            x: [0, 15, -15, 0], // Movimiento horizontal más amplio
            // Parallax con el mouse solo horizontal
            translateX: mousePosition.x,
            // Opacidad para la transición entre imágenes
            opacity: currentImageIndex === index ? 1 : 0
          }}
          transition={{
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: {
              duration: 20, // Más lento para suavidad
              repeat: Infinity,
              ease: "easeInOut"
            },
            translateX: {
              type: "spring",
              stiffness: 80,
              damping: 25
            },
            opacity: {
              duration: 1.5, // Transición suave entre imágenes
              ease: "easeInOut"
            }
          }}
        />
      ))}

      {/* Overlay gradiente con animación */}
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.05, 0.15, 0.1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Contenido */}
      <div className="flex flex-col z-30 max-w-4xl px-6 relative">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-black"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 20px rgba(0,0,0,0.3)"
          }}
        >
          ¿Qué es BeeHappy?
        </motion.h1>

        {/* Contenedor con efecto cristal animado */}
        <div className="w-screen px-40">
          <motion.div
            className="frosted-glass mt-20"
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
              x: [0, -3, 3, 0] 
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              x: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            <motion.p 
              className="text-8xl md:text-4xl text-gray-800 leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Es un sistema tecnológico diseñado para modernizar la apicultura, facilitando a los
              apicultores el monitoreo remoto de sus colmenas y mejorando la toma de decisiones para
              el cuidado eficiente de las abejas.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Indicadores de imagen activa */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-[#F4B400] scale-125 shadow-lg' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;