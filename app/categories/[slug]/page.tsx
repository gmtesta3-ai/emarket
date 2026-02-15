import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category not found | eMarket" };
  return {
    title: `${category.name} | eMarket`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-stone-500">
        <Link href="/" className="hover:text-amber-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-amber-700">Categories</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-800">{category.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-stone-800">{category.name}</h1>
      {category.description && (
        <p className="mt-2 text-stone-600">{category.description}</p>
      )}
      <p className="mt-2 text-sm text-stone-500">{categoryProducts.length} products</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
