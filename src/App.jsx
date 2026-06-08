import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import AnimatedPage from './components/AnimatedPage'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(getInitialTheme())
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`relative min-h-screen overflow-x-hidden overflow-y-visible transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-950'}`}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="mx-auto max-w-7xl px-4 py-8 pb-16 sm:px-6 lg:px-10 xl:px-12">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />
            <Route
              path="/products"
              element={
                <AnimatedPage>
                  <Products />
                </AnimatedPage>
              }
            />
            <Route
              path="/products/:id"
              element={
                <AnimatedPage>
                  <ProductDetails />
                </AnimatedPage>
              }
            />
            <Route
              path="*"
              element={
                <AnimatedPage>
                  <NotFound />
                </AnimatedPage>
              }
            />
          </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
