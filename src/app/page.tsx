//src/app/page.tsx

import Hero from "@/components/common/Hero";
import ProductCard from "@/components/ui/ProductCard";
import VideoCard from "@/components/ui/VideoCard";
import { mockProducts, mockVideos } from "@/constants/mockData";

export default function Home() {
  return (
    <div className="space-y-16">

      <Hero />

      {/* محصولات */}
      <section>
        <h2 className="text-2xl font-bold mb-6">محصولات پیشنهادی</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* ویدئوهای آموزشی */}
      <section>
        <h2 className="text-2xl font-bold mb-6">ویدئوهای آموزشی محبوب</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
    </div>
  );
}
