import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getCategoryById } from "@/lib/data";
import AddToCartButton from "@/components/AddToCartButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found | eMarket" };
  return {
    title: `${product.name} | eMarket`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryById(product.categoryId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-stone-500">
        <Link href="/" className="hover:text-amber-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-amber-700">Products</Link>
        {category && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/categories/${category.slug}`} className="hover:text-amber-700">
              {category.name}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-stone-800">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-stone-100">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-cover"
            priority
            unoptimized
          />
        </div>
        <div>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="text-sm font-medium text-amber-700 hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-2 text-3xl font-bold text-stone-800">{product.name}</h1>
          <p className="mt-4 text-stone-600">{product.description}</p>
          {product.rating != null && (
            <p className="mt-2 text-sm text-stone-500">
              ⭐ {product.rating} (Stock: {product.stock})
            </p>
          )}
          <p className="mt-6 text-3xl font-bold text-amber-700">
            ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
          <div className="mt-8">
            <AddToCartButton product={product} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}
