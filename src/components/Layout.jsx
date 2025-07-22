import Header from "../components/index/Header"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F5E6D3] relative">
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout