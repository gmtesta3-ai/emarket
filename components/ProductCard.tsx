import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import AddToCartButton from "./AddToCartButton";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-sm transition hover:shadow-md hover:border-amber-300/70">
      <Link href={`/products/${product.slug}`} className="block overflow-hidden rounded-t-2xl bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="h-56 w-full object-cover transition group-hover:scale-105"
          unoptimized
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-stone-800 transition hover:text-amber-700 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-stone-500">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="text-lg font-bold text-amber-700">
            ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
          <AddToCartButton product={product} size="small" />
        </div>
      </div>
    </article>
  );
}
