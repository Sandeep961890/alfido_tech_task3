import FeatureCard from '../components/FeatureCard'

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
            React Router example
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Home page
          </h1>
          <p className="mt-4 text-slate-300 sm:text-lg">
            This is the main landing page for your Vite React app. Use routing to split views into separate pages.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <FeatureCard
          title="Clean folder structure"
          description="Separate components, styles, and assets for scalable growth."
        />
        <FeatureCard
          title="Tailwind CSS support"
          description="Utility-first styling with responsive classes and dark-friendly defaults."
        />
        <FeatureCard
          title="Fast development"
          description="Vite HMR gives instant updates while you build UI and interactions."
        />
        <FeatureCard
          title="Mobile-first layout"
          description="Responsive design ensures the app looks great on phones and large screens."
        />
      </section>
    </div>
  )
}
