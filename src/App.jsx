import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import IndexPage from "./views/IndexPage"
import WhatThisPage from "./views/WhatThisPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/what" element={<WhatThisPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App