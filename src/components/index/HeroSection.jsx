import CircularGallery from './CircularGallery'
import { galleryItems } from '../../data/index/galleryItems'

const HeroSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mt-4 sm:mt-6 md:mt-8">
      {/* Título principal */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#005076] leading-tight">
          <span className="block sm:inline">SWEET TECHNOLOGY</span>
          <span className="block sm:inline"> FOR A</span>
          <br className="hidden sm:block" />
          <span className="block">SUSTAINABLE FUTURE</span>
        </h1>
      </div>
      
      {/* Gallery Container con altura responsive */}
      <div 
        className="relative" 
        style={{ 
          height: window.innerWidth < 640 ? '300px' : 
                  window.innerWidth < 768 ? '350px' : 
                  window.innerWidth < 1024 ? '400px' : '450px',
          marginTop: '-10px' 
        }}
      >
        <CircularGallery 
          items={galleryItems}
          bend={window.innerWidth < 768 ? 2 : 3} 
          textColor="#005076" 
          borderRadius={0.05} 
          scrollSpeed={window.innerWidth < 768 ? 1.5 : 2}
          scrollEase={0.05}
        />
      </div>
    </section>
  )
}

export default HeroSection