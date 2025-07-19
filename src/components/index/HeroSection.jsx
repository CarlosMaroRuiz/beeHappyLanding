import CircularGallery from './CircularGallery'

const HeroSection = () => {
  // Datos para el carrusel con imágenes originales
  const galleryItems = [
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtmI-1KleiJxP6bXS-6xZAAopMY6UMPLS1A&s", 
      text: "Panal Natural" 
    },
    { 
      image: "https://www.abejareyna.mx/cdn/shop/articles/importancia-abejas-entrevista-frida-rivera-revista-glamour.webp?v=1719966545", 
      text: "Apicultor Experto" 
    },
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOPATfV5p6BMHOKuMAtvQh08TOvsTjXFXNw&s", 
      text: "Colmena Saludable" 
    }
  ];

  return (
    <section className="w-full px-12 mt-8">
      {/* Título principal */}
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#005076] text-center leading-tight mb-0">
          SWEET TECHNOLOGY FOR A<br />
          SUSTAINABLE FUTURE
        </h1>
      </div>
      
 
      <div style={{ height: '450px', position: 'relative', marginTop: '-10px' }}>
        <CircularGallery 
          items={galleryItems}
          bend={3} 
          textColor="#005076" 
          borderRadius={0.05} 
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  )
}

export default HeroSection
