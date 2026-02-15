import type { Category, Product } from "./types";

export const categories: Category[] = [
  { id: "1", name: "Electronics", slug: "electronics", description: "Phones, computers and accessories" },
  { id: "2", name: "Clothing", slug: "clothing", description: "Apparel and footwear" },
  { id: "3", name: "Home & Living", slug: "home-living", description: "Home decor and kitchen" },
  { id: "4", name: "Beauty", slug: "beauty", description: "Skincare and makeup" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    slug: "wireless-headphones",
    description: "Noise cancelling, 30-hour battery life. Bluetooth 5.2.",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    categoryId: "1",
    stock: 25,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Smart Watch",
    slug: "smart-watch",
    description: "Heart rate, sleep and step tracking. Water resistant.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    categoryId: "1",
    stock: 15,
    rating: 4.8,
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    description: "RGB lighting, Cherry MX switches.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
    categoryId: "1",
    stock: 30,
    rating: 4.6,
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    slug: "organic-cotton-tshirt",
    description: "100% organic cotton, unisex fit.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1521572163471-631404d298b4?w=400&h=400&fit=crop",
    categoryId: "2",
    stock: 100,
    rating: 4.4,
  },
  {
    id: "5",
    name: "Running Sneakers",
    slug: "running-sneakers",
    description: "Lightweight, breathable mesh upper. For running and everyday wear.",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    categoryId: "2",
    stock: 40,
    rating: 4.7,
  },
  {
    id: "6",
    name: "Leather Backpack",
    slug: "leather-backpack",
    description: "Handcrafted leather, laptop compartment included.",
    price: 749.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    categoryId: "2",
    stock: 20,
    rating: 4.9,
  },
  {
    id: "7",
    name: "Ceramic Coffee Mug Set",
    slug: "ceramic-coffee-mug-set",
    description: "Set of 4, oven-safe ceramic.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    categoryId: "3",
    stock: 50,
    rating: 4.5,
  },
  {
    id: "8",
    name: "LED Desk Lamp",
    slug: "led-desk-lamp",
    description: "Dimmer, 3 color temperatures, USB charging port.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    categoryId: "3",
    stock: 35,
    rating: 4.6,
  },
  {
    id: "9",
    name: "Moisturizing Cream",
    slug: "moisturizing-cream",
    description: "Hyaluronic acid, 50 ml. For all skin types.",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    categoryId: "4",
    stock: 60,
    rating: 4.7,
  },
  {
    id: "10",
    name: "Sunscreen SPF 50",
    slug: "sunscreen-spf50",
    description: "Face and body, water resistant.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
    categoryId: "4",
    stock: 80,
    rating: 4.8,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
