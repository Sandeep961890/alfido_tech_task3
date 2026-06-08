import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cardVariants = {
  hover: { y: -6, scale: 1.01 },
}

export default function ProductCard({ image, title, description, technologies, detailsUrl }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover="hover"
      className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_28px_80px_-40px_rgba(56,189,248,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/90 sm:p-6 lg:p-7"
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 shadow-inner shadow-slate-950/20 transition duration-300">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-64 lg:h-72"
        />
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Featured</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
        </div>

        <p className="text-slate-400">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition duration-200 hover:border-cyan-400/30 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4">
          <Link
            to={detailsUrl}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:brightness-110"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
