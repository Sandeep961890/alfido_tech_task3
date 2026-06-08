import ProductCard from '../components/ProductCard'
import products from '../data/products'

export default function Products() {
  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
            Product collection
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Explore powerful digital experiences designed for modern users.
          </h1>
          <p className="text-slate-300 leading-8 sm:text-lg">
            Browse our curated suite of products built with cutting-edge design, responsive layouts, and intelligent workflows.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            technologies={product.technologies}
            detailsUrl={`/products/${product.id}`}
          />
        ))}
      </div>
    </section>
  )
}
