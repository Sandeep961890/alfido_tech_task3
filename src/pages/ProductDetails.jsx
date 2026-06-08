import { Link, useParams } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <section className="space-y-6 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8 text-slate-100 shadow-glow">
        <h1 className="text-3xl font-semibold text-rose-300">Product not found</h1>
        <p className="text-slate-300">The product you are looking for does not exist. Please select another item from the catalog.</p>
        <Link
          to="/products"
          className="inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <section className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.5fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Product details</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{product.title}</h1>
          <p className="mt-4 text-slate-300 leading-8">{product.content.overview}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.content.features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
              >
                <p className="text-sm font-semibold text-white">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full rounded-[1.75rem] object-cover shadow-2xl shadow-slate-950/50 sm:h-72 lg:h-80"
          />
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Tech stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Use cases</p>
            <div className="mt-4 space-y-3">
              {product.content.useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-300"
                >
                  {useCase}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/products"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-white/10"
        >
          Back to products
        </Link>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
        >
          Start project
        </a>
      </div>
    </section>
  )
}
