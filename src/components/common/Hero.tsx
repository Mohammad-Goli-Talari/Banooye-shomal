// src/components/common/Hero.tsx

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-orange-200 to-orange-50 py-16 rounded-2xl px-6 mb-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        بانوی شمال – طعم اصیل شمال در خانه شما
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        محصولات خانگی، ویدئوهای آموزشی آشپزی، و سفارشات کترینگ
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="/shop"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
        >
          مشاهده محصولات
        </a>

        <a
          href="/education"
          className="bg-white border border-orange-600 text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition"
        >
          دیدن آموزش‌ها
        </a>
      </div>
    </section>
  );
}
