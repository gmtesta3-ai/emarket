import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-amber-200/50 bg-amber-50/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-stone-800">eMarket</p>
            <p className="mt-2 text-sm text-stone-600">
              Your trusted place to shop.
            </p>
          </div>
          <div>
            <p className="font-semibold text-stone-800">Shop</p>
            <ul className="mt-2 space-y-1 text-sm text-stone-600">
              <li><Link href="/products" className="hover:text-amber-700">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-amber-700">Categories</Link></li>
              <li><Link href="/cart" className="hover:text-amber-700">Cart</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-800">Help</p>
            <ul className="mt-2 space-y-1 text-sm text-stone-600">
              <li><a href="#" className="hover:text-amber-700">Contact</a></li>
              <li><a href="#" className="hover:text-amber-700">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-700">Returns</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-800">Follow us</p>
            <p className="mt-2 text-sm text-stone-600">
              Social links coming soon.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-amber-200/50 pt-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} eMarket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
