"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/types";

type Props = { product: Product; size?: "small" | "large"; quantity?: number };

export default function AddToCartButton({ product, size = "large", quantity = 1 }: Props) {
  const { addItem } = useCart();

  const handleClick = () => {
    addItem(product, quantity);
  };

  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2";
  const small =
    "bg-amber-100 px-3 py-1.5 text-sm text-stone-800 hover:bg-amber-200";
  const large =
    "w-full bg-amber-600 px-4 py-3 text-white hover:bg-amber-700";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${base} ${size === "small" ? small : large}`}
    >
      Add to Cart
    </button>
  );
}
