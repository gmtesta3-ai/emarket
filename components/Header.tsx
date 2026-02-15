"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/50 bg-amber-50/95 backdrop-blur supports-[backdrop-filter]:bg-amber-50/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-stone-800 transition hover:text-amber-700"
        >
          eMarket
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
          <Link
            href="/"
            className="transition hover:text-amber-700"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="transition hover:text-amber-700"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="transition hover:text-amber-700"
          >
            Categories
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-2 text-stone-800 transition hover:bg-amber-200"
          >
            <span className="text-lg" aria-hidden>🛒</span>
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-600 px-1.5 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
