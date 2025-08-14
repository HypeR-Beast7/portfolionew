import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import Education from './pages/education'
import Project from './pages/project'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <nav className="bg-gray-800 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex justify-center items-center space-x-10 py-4 text-lg font-semibold">
              <li>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
