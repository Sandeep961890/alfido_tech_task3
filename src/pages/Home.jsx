import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-14 sm:px-6 lg:px-10 xl:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] sm:h-[360px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-96 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.16),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl sm:p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.55fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300 ring-1 ring-cyan-300/20">
                Premium launchpad
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Create polished web experiences with confidence.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl">
                Build a premium multi-page React app with smooth animations, dark theme polish, responsive layouts, and conversion-focused calls to action.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
                >
                  Explore products
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-400/30 hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Fast growth kit</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Designed for modern brands</h2>
              <p className="mt-4 text-slate-300">
                Launch a cohesive experience with reusable UI sections, premium typography, and a polished dark theme that feels both modern and refined.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10 transition duration-300 hover:bg-slate-900">
                  <p className="text-lg font-semibold text-white">Responsive by default</p>
                  <p className="mt-2 text-sm text-slate-400">Layouts adapt beautifully from mobile to desktop.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10 transition duration-300 hover:bg-slate-900">
                  <p className="text-lg font-semibold text-white">Glassmorphism UI</p>
                  <p className="mt-2 text-sm text-slate-400">Soft translucency and subtle depth keep the interface premium.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
