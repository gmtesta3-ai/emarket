import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-stone-800">404</h1>
      <p className="mt-2 text-stone-600">Page not found.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-amber-600 px-6 py-3 font-medium text-white hover:bg-amber-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
