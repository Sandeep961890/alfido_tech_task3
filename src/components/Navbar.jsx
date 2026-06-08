import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Products', to: '/products' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-[0_30px_80px_-45px_rgba(15,23,42,0.85)]">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-slate-100 transition hover:text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20 backdrop-blur-md">
            R
          </span>
          <span className="text-base font-semibold tracking-tight sm:text-lg">Reactor</span>
        </NavLink>

        <div className="flex items-center gap-4">
          <div className="hidden rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 shadow-[0_12px_40px_-24px_rgba(56,189,248,0.8)] sm:inline-flex">
            AI Studio
          </div>
          <div className="hidden sm:block">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-slate-200 transition hover:border-slate-500/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60 sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="relative block h-0.5 w-6 rounded-full bg-current transition duration-300"
              style={{ transform: isOpen ? 'rotate(45deg) translateY(0.125rem)' : 'none' }}
            />
            <span className={`absolute left-2.5 top-4 block h-0.5 w-6 rounded-full bg-current transition duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className="absolute left-0 top-7 block h-0.5 w-6 rounded-full bg-current transition duration-300"
              style={{ transform: isOpen ? 'rotate(-45deg) translateY(-0.125rem)' : 'none' }}
            />
          </button>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-[max-height] duration-300 ease-out`}>
        <div className="space-y-3 border-t border-slate-700/60 bg-slate-950/95 px-4 py-5 backdrop-blur-xl sm:px-6">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block rounded-3xl px-5 py-3 text-base font-medium transition ${
                  isActive
                    ? 'bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="hidden border-t border-slate-700/40 bg-slate-950/40 px-4 py-3 sm:block sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${
                  isActive
                    ? 'bg-cyan-400/15 text-cyan-300 shadow-[0_8px_30px_-12px_rgba(56,189,248,0.8)]'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
