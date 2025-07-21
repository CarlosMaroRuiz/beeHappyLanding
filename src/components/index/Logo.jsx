import abeja from "../../../public/abeja-removebg.png"

const Logo = () => {
  return (
    <span className="flex items-center">
      <img 
        src={abeja} 
        alt="BeeHappy Logo" 
        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15" 
      />
      <h1 className="text-[#F4B400] font-bold text-lg sm:text-xl lg:text-2xl ml-1 sm:ml-2">
        BeeHappy
      </h1>
    </span>
  )
}

export default Logo