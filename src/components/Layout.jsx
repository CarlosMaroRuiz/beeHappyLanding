import { Outlet } from 'react-router-dom'
import Header from "../components/index/Header"

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#F5E6D3] relative">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout