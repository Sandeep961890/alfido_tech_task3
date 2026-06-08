export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-400/90 via-violet-500/80 to-fuchsia-500/80 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_20px_55px_-35px_rgba(56,189,248,0.85)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_25px_75px_-30px_rgba(56,189,248,0.9)] focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      aria-label="Toggle dark mode"
    >
      <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
      <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
    </button>
  )
}
