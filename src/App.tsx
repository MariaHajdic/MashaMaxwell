import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
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

const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div {...pageTransition}>
    {children}
  </motion.div>
)

const AppContent = () => {
  const location = useLocation()

  return (
    <div className="app__container">
      <Sidebar />
      <ScrollToHash />

      <main className="page__content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Gallery /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/commission" element={<AnimatedPage><Commission /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="mobile__footer">
        <div>© {new Date().getFullYear()} Masha Maxwell</div>
        <div>
          Powered by{" "}
          <a href="https://hajdicdesigns.co.uk" target="_blank" rel="noopener noreferrer">
            Maria Hajdic
          </a>
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

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timeout = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
      return () => clearTimeout(timeout)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname, hash])

  return null
}

export default App
