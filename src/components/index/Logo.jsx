import abeja from "../../../public/abeja-removebg.png"
const Logo = () =>{
   return <span className="flex items-center">
        <img src={abeja} alt="" className="w-15 h-15" />
      <h1 className="text-[#F4B400] font-bold text-2xl">BeeHappy</h1>
   </span>
}

export default Logo