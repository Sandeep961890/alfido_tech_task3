export default function FeatureCard({ title, description }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/90">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
    </article>
  )
}
