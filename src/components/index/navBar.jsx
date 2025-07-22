const Navbar = ({ isMobile = false, activeSection, onSectionClick }) => {
  
  const linkClass = isMobile 
    ? "text-[#005076] text-xl font-medium py-3 px-4 rounded-lg hover:bg-[#F4B400] hover:bg-opacity-20 transition-colors border-b border-[#005076] border-opacity-20 block" 
    : "hover:text-[#F4B400] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#F4B400] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"

  const activeLinkClass = "text-[#F4B400] after:w-full"

  const containerClass = isMobile 
    ? "flex flex-col space-y-6" 
    : "flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-14 text-base lg:text-lg xl:text-xl px-2 pb-1"

  const getButtonClass = (section) => {
    const baseClass = linkClass
    if (!isMobile && activeSection === section) {
      return `${baseClass} ${activeLinkClass}`
    }
    return baseClass
  }

  const handleClick = (section) => {
    // Si la sección existe, hacer scroll, si no, mostrar mensaje temporal
    const element = document.getElementById(section)
    if (element) {
      onSectionClick(section)
    } else {
      // Mensaje temporal para secciones no implementadas
      console.log(`Sección "${section}" próximamente disponible`)
      // Opcionalmente podrías mostrar un toast o notificación aquí
    }
  }

  return (
    <nav className={containerClass}>
      <button 
        className={getButtonClass('what')}
        onClick={() => handleClick('what')}
      >
        Qué es
      </button>
      
      <button 
        className={getButtonClass('monitoreo')}
        onClick={() => handleClick('monitoreo')}
      >
        Monitoreo
      </button>
      
      <button 
        className={getButtonClass('beneficios')}
        onClick={() => handleClick('beneficios')}
      >
        Beneficios
      </button>
      
      <button 
        className={getButtonClass('about')}
        onClick={() => handleClick('about')}
      >
        About us
      </button>
      
      <button 
        className={getButtonClass('contacto')}
        onClick={() => handleClick('contacto')}
      >
        Contacto
      </button>
    </nav>
  );
};

export default Navbar;

