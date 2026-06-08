import { Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductsPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">Products</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Browse our product catalog</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Explore featured packages and click any product to view detailed information for the selected item.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/90"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{product.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{product.name}</h2>
              </div>
              <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                {product.price}
              </span>
            </div>
            <p className="mt-4 text-slate-400">{product.description}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-white">
              <span>View details</span>
              <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
