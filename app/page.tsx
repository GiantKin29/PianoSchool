import Link from "next/link";
import profile from "@/data/profile.json";
import { getAllPostsMeta } from "@/lib/posts";

export default function Home() {
  const latestPosts = getAllPostsMeta().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none text-[200px] leading-none flex items-center justify-center text-rose-300">
          🎹
        </div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-rose-400 tracking-widest text-sm font-medium mb-3 uppercase">
            Piano Lesson
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-4">
            {profile.catchphrase}
          </h1>
          <p className="text-stone-500 text-lg mb-8 leading-relaxed">
            {profile.schoolName}へようこそ。<br className="hidden md:block" />
            子どもから大人まで、あなたのペースで丁寧にお教えします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md"
            >
              無料体験レッスンに申込む
            </Link>
            <Link
              href="/lessons"
              className="border border-rose-400 text-rose-600 hover:bg-rose-50 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              レッスン内容を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">
          選ばれる3つの理由
        </h2>
        <p className="text-center text-stone-400 text-sm mb-12">Why choose us</p>
        <div className="grid md:grid-cols-3 gap-8">
          {profile.features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-stone-800 text-lg mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-rose-500 py-14 px-4 text-center">
        <p className="text-white/80 text-sm mb-2 tracking-widest uppercase">Free Trial</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          まずは無料体験レッスンから
        </h2>
        <p className="text-rose-100 mb-6 text-sm">
          はじめての方も安心。30分の体験レッスンで教室の雰囲気を体感してください。
        </p>
        <Link
          href="/contact"
          className="bg-white text-rose-600 hover:bg-rose-50 font-bold px-10 py-3 rounded-full transition-colors inline-block shadow"
        >
          申し込む（無料）
        </Link>
      </section>

      {/* About preview */}
      <section className="py-20 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-rose-400 text-sm tracking-widest uppercase mb-2">Teacher</p>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">講師紹介</h2>
          <p className="text-stone-600 leading-relaxed mb-6">{profile.bio}</p>
          <Link
            href="/about"
            className="inline-block border border-rose-400 text-rose-600 hover:bg-rose-50 px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            プロフィール・実績を見る →
          </Link>
        </div>
        <div className="flex-shrink-0 w-56 h-56 rounded-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center shadow-lg">
          <span className="text-7xl">🎹</span>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-rose-400 text-sm tracking-widest uppercase mb-1">Blog</p>
            <h2 className="text-2xl font-bold text-stone-800">最新ブログ</h2>
          </div>
          <Link href="/blog" className="text-rose-500 hover:underline text-sm">
            すべて見る →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="font-semibold text-stone-800 mt-3 mb-2 group-hover:text-rose-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-stone-400 text-xs">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
