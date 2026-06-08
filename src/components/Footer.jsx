import { Link } from 'react-router-dom'

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', label: 'twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', label: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com', label: 'github' },
]

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Products', to: '/products' },
  { name: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/85 text-slate-300 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Reactor Studio</p>
            <p className="max-w-xl text-slate-400 leading-7">
              Build premium digital experiences with polished UI, responsive layouts, and modern interactions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">Navigation</h2>
            <div className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block text-slate-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">Follow us</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-slate-900 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-800/70 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Reactor Studio. All rights reserved.</p>
          <p className="text-slate-400">Designed for modern product experiences in dark-mode projects.</p>
        </div>
      </div>
    </footer>
  )
}
