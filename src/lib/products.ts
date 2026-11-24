export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fallbackProducts: Product[] = [
  {
    id: 1,
    title: "Laptop ultraligera Nova Air",
    price: 899.99,
    description:
      "Una laptop ligera y potente para trabajar, estudiar y crear desde cualquier lugar.",
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.8, count: 124 },
  },
  {
    id: 2,
    title: "Reloj minimalista Meridian",
    price: 129.99,
    description:
      "Un reloj de líneas limpias y acabado cuidado, diseñado para acompañar cualquier ocasión.",
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.6, count: 89 },
  },
  {
    id: 3,
    title: "Auriculares inalámbricos Studio",
    price: 179.99,
    description:
      "Sonido envolvente y comodidad durante todo el día en un diseño inalámbrico.",
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.7, count: 203 },
  },
  {
    id: 4,
    title: "Cámara instantánea Moment",
    price: 99.99,
    description:
      "Captura tus momentos favoritos y conviértelos en recuerdos para compartir.",
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.5, count: 76 },
  },
  {
    id: 5,
    title: "Zapatillas urbanas Essential",
    price: 84.99,
    description:
      "Zapatillas versátiles con una silueta clásica y comodidad para cada paso.",
    category: "Moda",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.6, count: 158 },
  },
  {
    id: 6,
    title: "Camiseta de algodón Everyday",
    price: 29.99,
    description:
      "Una camiseta esencial de algodón suave, fácil de combinar y usar a diario.",
    category: "Moda",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.4, count: 92 },
  },
  {
    id: 7,
    title: "Bolso de hombro Atelier",
    price: 74.99,
    description:
      "Un bolso funcional con espacio para tus esenciales y un diseño atemporal.",
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.7, count: 111 },
  },
  {
    id: 8,
    title: "Chaqueta ligera Urban",
    price: 119.99,
    description:
      "Una capa ligera para los días frescos, con un corte cómodo y contemporáneo.",
    category: "Moda",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.5, count: 68 },
  },
  {
    id: 9,
    title: "Mochila commuter",
    price: 69.99,
    description:
      "Una mochila práctica para tus desplazamientos, con espacio para lo que necesitas.",
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.6, count: 143 },
  },
  {
    id: 10,
    title: "Gafas de sol Horizon",
    price: 54.99,
    description:
      "Gafas de sol de estilo moderno para completar tus looks en días luminosos.",
    category: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.3, count: 57 },
  },
  {
    id: 11,
    title: "Sudadera de algodón Comfort",
    price: 64.99,
    description:
      "Una sudadera suave y relajada que aporta comodidad sin renunciar al estilo.",
    category: "Moda",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.5, count: 84 },
  },
  {
    id: 12,
    title: "Altavoz portátil Wave",
    price: 89.99,
    description:
      "Lleva tu música contigo con un altavoz compacto, fácil de usar y de transportar.",
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    rating: { rate: 4.7, count: 132 },
  },
];

function isProduct(value: unknown): value is Product {
  if (typeof value !== "object" || value === null) return false;
  const product = value as Record<string, unknown>;
  if (typeof product.rating !== "object" || product.rating === null) {
    return false;
  }
  const rating = product.rating as Record<string, unknown>;

  return (
    typeof product.id === "number" &&
    typeof product.title === "string" &&
    typeof product.price === "number" &&
    typeof product.description === "string" &&
    typeof product.category === "string" &&
    typeof product.image === "string" &&
    typeof rating.rate === "number" &&
    typeof rating.count === "number"
  );
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
    if (!res.ok) return fallbackProducts;

    const data: unknown = await res.json();
    if (Array.isArray(data) && data.every(isProduct) && data.length > 0) {
      return data.filter(isProduct);
    }
  } catch {
    return fallbackProducts;
  }

  return fallbackProducts;
}

export async function getProductById(id: string): Promise<Product> {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${encodeURIComponent(id)}`,
      { cache: "no-store" },
    );
    if (res.ok) {
      const data: unknown = await res.json();
      if (isProduct(data)) return data;
    }
  } catch {
    return fallbackProducts.find((product) => product.id === Number(id)) ??
      fallbackProducts[0];
  }

  return (
    fallbackProducts.find((product) => product.id === Number(id)) ??
    fallbackProducts[0]
  );
}
