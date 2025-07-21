import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ isMobile = false, onLinkClick }) => {
  const location = useLocation()
  
  const linkClass = isMobile 
    ? "text-[#005076] text-xl font-medium py-3 px-4 rounded-lg hover:bg-[#F4B400] hover:bg-opacity-20 transition-colors border-b border-[#005076] border-opacity-20 block" 
    : "hover:text-[#F4B400] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#F4B400] after:transition-all after:duration-300 hover:after:w-full"

  const activeLinkClass = "text-[#F4B400] after:w-full"

  const containerClass = isMobile 
    ? "flex flex-col space-y-6" 
    : "flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-14 text-base lg:text-lg xl:text-xl px-2 pb-1"

  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick()
    }
  }

  const handleScrollClick = (sectionId) => {
    handleClick()
    // Si estamos en la página principal, hacer scroll
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.querySelector(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Si no estamos en la página principal, navegar a home y luego hacer scroll
      window.location.href = `/${sectionId}`
    }
  }

  return (
    <nav className={containerClass}>
      <Link 
        to="/que-es" 
        className={`${linkClass} ${location.pathname === '/que-es' && !isMobile ? activeLinkClass : ''}`}
        onClick={handleClick}
      >
        Qué es
      </Link>
      
      <button 
        className={linkClass}
        onClick={() => handleScrollClick('#monitoreo')}
      >
        Monitoreo
      </button>
      
      <button 
        className={linkClass}
        onClick={() => handleScrollClick('#beneficios')}
      >
        Beneficios
      </button>
      
      <button 
        className={linkClass}
        onClick={() => handleScrollClick('#about')}
      >
        About us
      </button>
      
      <button 
        className={linkClass}
        onClick={() => handleScrollClick('#contacto')}
      >
        Contacto
      </button>
    </nav>
  );
};

export default Navbar;