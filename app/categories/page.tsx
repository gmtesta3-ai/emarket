import Link from "next/link";
import { categories } from "@/lib/data";
import { getProductsByCategory } from "@/lib/data";

export const metadata = {
  title: "Categories | eMarket",
  description: "Product categories.",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-stone-800">Categories</h1>
      <p className="mt-2 text-stone-600">Browse categories and discover products.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const count = getProductsByCategory(cat.id).length;
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="flex flex-col rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"
            >
              <span className="text-4xl" aria-hidden>📦</span>
              <h2 className="mt-3 text-xl font-semibold text-stone-800">{cat.name}</h2>
              <p className="mt-1 text-sm text-stone-500">{cat.description}</p>
              <p className="mt-2 text-sm font-medium text-amber-700">{count} products</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
