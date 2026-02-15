export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  stock: number;
  rating?: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
