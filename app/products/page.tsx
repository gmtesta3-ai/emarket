import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "All Products | eMarket",
  description: "eMarket product catalog.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-stone-800">All Products</h1>
      <p className="mt-2 text-stone-600">{products.length} products listed.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
