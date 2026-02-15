"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <p className="text-6xl" aria-hidden>🛒</p>
        <h1 className="mt-4 text-2xl font-bold text-stone-800">Your cart is empty</h1>
        <p className="mt-2 text-stone-600">
          Browse products to start shopping.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-amber-600 px-6 py-3 font-medium text-white hover:bg-amber-700"
        >
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-stone-800">My Cart</h1>
      <p className="mt-2 text-stone-600">{totalItems} items</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="space-y-4">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex gap-4 rounded-2xl border border-amber-200/60 bg-white p-4 shadow-sm"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-semibold text-stone-800 hover:text-amber-700"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-lg font-bold text-amber-700">
                    ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100"
                      aria-label="Decrease"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 text-stone-600 hover:bg-stone-100"
                      aria-label="Increase"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="ml-2 text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right font-semibold text-stone-800">
                  ${(product.price * quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-stone-800">Order Summary</h2>
            <div className="mt-4 flex justify-between text-stone-600">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="mt-2 flex justify-between font-bold text-stone-800">
              <span>Total</span>
              <span>${totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-amber-600 py-3 font-medium text-white hover:bg-amber-700"
            >
              Proceed to Checkout (Demo)
            </button>
            <Link
              href="/products"
              className="mt-3 block text-center text-sm text-amber-700 hover:underline"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
