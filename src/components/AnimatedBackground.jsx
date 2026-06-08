import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl opacity-80 animate-blob" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl opacity-75 animate-blob animation-delay-2000" />
      <div className="absolute left-1/2 bottom-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-400/15 blur-3xl opacity-80 animate-blob animation-delay-4000" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
    </motion.div>
  )
}
