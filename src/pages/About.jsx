import { Link } from 'react-router-dom'

const skills = [
  { title: 'Product Design', detail: 'Crafting intuitive UI patterns with a focus on clarity and conversion.' },
  { title: 'React Development', detail: 'Building reusable component systems with modern React and state management.' },
  { title: 'Tailwind CSS', detail: 'Creating polished interfaces with responsive utility-first styling.' },
]

const timeline = [
  { year: '2024', title: 'Design system launch', description: 'Released a cohesive product suite with reusable components, dark mode, and performance-first interactions.' },
  { year: '2025', title: 'Marketplace expansion', description: 'Scaled the application to support additional product categories, improved navigation, and faster onboarding.' },
  { year: '2026', title: 'Premium platform release', description: 'Introduced a polished user experience with advanced analytics, dynamic routing, and a modern brand presence.' },
]

export default function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-10 xl:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-96 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.14),transparent_40%)] lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl transition duration-500 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div className="space-y-8">
            <p className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300 ring-1 ring-cyan-300/20">
              About the studio
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                We help teams build elegant digital products with clarity and speed.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Our process blends premium design, modern development, and a strong focus on responsive experiences—so every page feels polished on desktop and mobile.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
              >
                View products
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-400/30 hover:text-white"
              >
                Back to home
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 text-slate-300 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Our approach</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Beautifully crafted experiences with depth and motion.</h2>
            <p className="mt-4 leading-8 text-slate-400">
              We design with interaction in mind: subtle motion, glassmorphism surfaces, and typography that feels premium yet approachable.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10 transition duration-300 hover:bg-slate-900">
                <p className="font-semibold text-white">Responsive foundations</p>
                <p className="mt-2 text-sm text-slate-400">Layouts built to scale across devices with consistent spacing and fluid content flow.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/10 transition duration-300 hover:bg-slate-900">
                <p className="font-semibold text-white">Design system ready</p>
                <p className="mt-2 text-sm text-slate-400">Reusable cards, typography, and interactive elements for rapid iteration.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <article key={skill.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-slate-900">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-3 text-slate-400 leading-7">{skill.detail}</p>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Experience timeline</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">A modern journey in product development.</h2>
              </div>
              <p className="max-w-xl text-slate-400">
                Every release was built to refine the product experience, improve performance, and make feature adoption effortless.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
                  <div className="flex items-center gap-4 text-slate-300 sm:justify-between">
                    <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">{item.year}</span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-slate-400 leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
