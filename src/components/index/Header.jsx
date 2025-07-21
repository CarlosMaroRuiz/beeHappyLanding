import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./navBar"
import Logo from "./Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Cerrar menú al cambiar el tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Animaciones para el menú
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
    }
  }

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  // Animación del icono hamburguesa
  const line1Variants = {
    closed: { rotate: 0, y: 0, originX: 0.5, originY: 0.5 },
    open: { rotate: 45, y: 6, originX: 0.5, originY: 0.5 }
  }
  
  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }
  
  const line3Variants = {
    closed: { rotate: 0, y: 0, originX: 0.5, originY: 0.5 },
    open: { rotate: -45, y: -6, originX: 0.5, originY: 0.5 }
  }

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 relative z-50 bg-[#F5E6D3]">
        <Link to="/" onClick={closeMenu}>
          <Logo/>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navbar onLinkClick={closeMenu} />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-50 p-3 focus:outline-none focus:ring-2 focus:ring-[#F4B400] focus:ring-opacity-50 rounded-lg transition-colors hover:bg-[#F4B400] hover:bg-opacity-10"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              className="block h-0.5 w-full bg-[#005076] rounded-full"
              variants={line1Variants}
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <motion.span
              className="block h-0.5 w-full bg-[#005076] rounded-full"
              variants={line2Variants}
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-full bg-[#005076] rounded-full"
              variants={line3Variants}
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </button>
        
        {/* ApiTech - Solo visible en desktop */}
        <h2 className="hidden lg:block text-[#F4B400] font-bold text-lg sm:text-xl md:text-2xl">ApiTech</h2>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#F5E6D3] to-[#F0D9C0] shadow-2xl z-40 lg:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Decorative Header */}
              <div className="h-20 bg-gradient-to-r from-[#F4B400] to-[#E6A000] relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              </div>

              {/* Menu Content */}
              <motion.div 
                className="flex flex-col h-full pt-8 px-6"
                variants={containerVariants}
                initial="closed"
                animate="open"
              >
                {/* Logo en el menú móvil */}
                <motion.div 
                  className="mb-8 text-center"
                  variants={itemVariants}
                >
                  <Link to="/" onClick={closeMenu}>
                    <Logo />
                  </Link>
                </motion.div>
                
                {/* Navigation Links */}
                <motion.div 
                  className="flex flex-col space-y-2"
                  variants={containerVariants}
                >
                  <Navbar isMobile={true} onLinkClick={closeMenu} />
                </motion.div>

                {/* CTA Button en móvil */}
                <motion.div 
                  className="mt-auto mb-8"
                  variants={itemVariants}
                >
                  <motion.button 
                    className="w-full bg-gradient-to-r from-[#F4B400] to-[#E6A000] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={closeMenu}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Comenzar ahora 🍯
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header