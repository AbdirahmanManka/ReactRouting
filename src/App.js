import Navbar from "./Navbar"
import Location  from "./Pages/Location"
import About from "./Pages/About"
import Services from "./Pages/Services"
import { Route, Routes } from "react-router-dom"
import './style.css'
import './index.js'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Location" element={<Location />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App