const Navbar = ({ isMobile = false, onLinkClick }) => {
  const linkClass = isMobile 
    ? "text-[#005076] text-xl font-medium py-3 px-4 rounded-lg hover:bg-[#F4B400] hover:bg-opacity-20 transition-colors border-b border-[#005076] border-opacity-20 block" 
    : "hover:text-[#F4B400] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#F4B400] after:transition-all after:duration-300 hover:after:w-full"

  const containerClass = isMobile 
    ? "flex flex-col space-y-6" 
    : "flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-14 text-base lg:text-lg xl:text-xl px-2 pb-1"

  const handleClick = (href) => {
    if (onLinkClick) {
      onLinkClick()
    }
    // Aquí puedes agregar lógica de scroll suave si usas anclas
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={containerClass}>
      <a 
        href="#que-es" 
        className={linkClass}
        onClick={(e) => {
          e.preventDefault()
          handleClick('#que-es')
        }}
      >
        Qué es
      </a>
      <a 
        href="#monitoreo" 
        className={linkClass}
        onClick={(e) => {
          e.preventDefault()
          handleClick('#monitoreo')
        }}
      >
        Monitoreo
      </a>
      <a 
        href="#beneficios" 
        className={linkClass}
        onClick={(e) => {
          e.preventDefault()
          handleClick('#beneficios')
        }}
      >
        Beneficios
      </a>
      <a 
        href="#about" 
        className={linkClass}
        onClick={(e) => {
          e.preventDefault()
          handleClick('#about')
        }}
      >
        About us
      </a>
      <a 
        href="#contacto" 
        className={linkClass}
        onClick={(e) => {
          e.preventDefault()
          handleClick('#contacto')
        }}
      >
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;