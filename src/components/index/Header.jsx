import Navbar from "./navBar"
import Logo from "./Logo"
const Header = () =>{
  
    return <header className="w-full flex items-center px-12 py-4 justify-between">
        <Logo/>
        <Navbar/>
        <h2 className="text-[#F4B400] font-bold text-2xl">ApiTech</h2>
    </header>
}

export default Header