import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pageContainer = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const floatBlob = {
  animate: {
    y: [0, -18, 0],
    x: [0, 8, 0],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
}

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-10 xl:px-12">
      <motion.div
        variants={floatBlob}
        animate="animate"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_34%)]"
      />
      <motion.div
        variants={floatBlob}
        animate="animate"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.16),transparent_40%)] blur-3xl opacity-70 lg:block"
      />
      <motion.div
        variants={floatBlob}
        animate="animate"
        className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.14),transparent_40%)] blur-3xl opacity-60"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          variants={pageContainer}
          initial="hidden"
          animate="show"
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-glow backdrop-blur-xl sm:p-12"
        >
          <div className="flex flex-col items-center text-center gap-8">
            <motion.div variants={fadeUp} className="flex items-center justify-center">
              <span className="text-[clamp(5rem,14vw,8rem)] font-black tracking-tight text-transparent bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-500 bg-clip-text">
                404
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4 px-2 sm:px-0">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">
                Page not found
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                This page drifted into the void.
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                The resource you were looking for can’t be found. Use the button below to return to the homepage and continue exploring our premium AI experience.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.9)] transition duration-300 hover:brightness-110"
                >
                  Back to home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/70 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-400/30 hover:text-white"
                >
                  Explore products
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
