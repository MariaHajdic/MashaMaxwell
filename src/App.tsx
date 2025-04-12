import { BrowserRouter as BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import About from "./pages/About"
import Commission from "./pages/Commission"
import Gallery from "./pages/Gallery"
import Sidebar from "./ui/Sidebar"
import './styles/App.css'

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
}

const AppContent = () => {
  const location = useLocation()

  return (
    <div className="app__container">
      <Sidebar />

      <main className="page__content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div {...pageTransition}>
                <Gallery />
              </motion.div>}
            />
            <Route path="/about" element={
              <motion.div {...pageTransition}>
                <About />
              </motion.div>}
            />
            <Route path="/commission" element={
              <motion.div {...pageTransition}>
                <Commission />
              </motion.div>}
            />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="mobile__footer">
        <div>© {new Date().getFullYear()} Masha Maxwell</div>
        <div>Powered by{' '}
          <a href="https://hajdicdesigns.co.uk" target="_blank" 
            rel="noopener noreferrer">Hajdic Designs</a>
        </div>
      </footer>
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
)

export default App
