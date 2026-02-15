import Link from "next/link";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-b-3xl border-b border-amber-200/50 bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl md:text-6xl">
            Start Shopping
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
            Thousands of products in one place—from electronics to beauty. Fast shipping, secure payment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full bg-amber-600 px-6 py-3 font-medium text-white transition hover:bg-amber-700"
            >
              Explore Products
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center rounded-full border-2 border-stone-300 bg-white px-6 py-3 font-medium text-stone-700 transition hover:border-amber-400 hover:bg-amber-50"
            >
              Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-stone-800">Categories</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="flex flex-col items-center rounded-2xl border border-amber-200/60 bg-white p-6 text-center shadow-sm transition hover:border-amber-300 hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>📦</span>
              <span className="mt-2 font-semibold text-stone-800">{cat.name}</span>
              <span className="mt-1 text-sm text-stone-500">{cat.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-stone-800">Featured Products</h2>
          <Link
            href="/products"
            className="text-sm font-medium text-amber-700 hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
