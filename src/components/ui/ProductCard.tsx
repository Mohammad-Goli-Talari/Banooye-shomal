// src/components/ui/ProductCard.tsx

import { Product } from "@/types/product";

export default function ProductCard({ title, price, image }: Product) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition p-3">
      <img src={image} alt={title} className="rounded-md w-full h-40 object-cover" />
      <h3 className="text-lg font-bold mt-3">{title}</h3>
      <p className="text-green-700 font-semibold mt-1">{price.toLocaleString()} تومان</p>
    </div>
  );
}
