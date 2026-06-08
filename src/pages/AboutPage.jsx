export default function AboutPage() {
  return (
    <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/50">
      <h1 className="text-4xl font-semibold text-white">About this app</h1>
      <p className="text-slate-300 leading-8">
        React Router DOM is now configured for client-side navigation. This page demonstrates a second route and a simple app structure.
      </p>
      <p className="text-slate-400">
        Add new pages by creating components under <code>src/pages</code> and registering routes inside <code>src/App.jsx</code>.
      </p>
    </div>
  )
}
