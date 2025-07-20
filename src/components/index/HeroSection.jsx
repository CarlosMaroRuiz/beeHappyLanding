import CircularGallery from './CircularGallery'
import { galleryItems } from '../../data/index/galleryItems'

const HeroSection = () => {

  

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
