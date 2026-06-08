import { Link, useParams } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetailsPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <div className="space-y-6 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8 text-slate-100 shadow-glow">
        <h1 className="text-3xl font-semibold text-rose-300">Product not found</h1>
        <p className="text-slate-300">We could not find the requested product. Please choose another item from the catalog.</p>
        <Link
          to="/products"
          className="inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Product details</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">{product.name}</h1>
            <p className="mt-4 text-slate-300 max-w-2xl">{product.description}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/80 px-6 py-4 text-right ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Price</p>
            <p className="mt-3 text-3xl font-semibold text-white">{product.price}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {product.features.map((feature) => (
          <div key={feature} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow">
            <p className="font-semibold text-white">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/products"
          className="inline-flex rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
        >
          Back to products
        </Link>
        <a
          href="#"
          className="inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Start checkout
        </a>
      </div>
    </section>
  )
}
