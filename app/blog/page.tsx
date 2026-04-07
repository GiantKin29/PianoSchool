import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export const metadata = {
  title: "ブログ | 花音ピアノ教室",
  description: "レッスン日記・音楽コラム・お知らせを発信しています。",
};

const categoryColors: Record<string, string> = {
  レッスン: "bg-rose-100 text-rose-600",
  お知らせ: "bg-sky-100 text-sky-600",
  音楽コラム: "bg-amber-100 text-amber-600",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <p className="text-rose-400 text-sm tracking-widest uppercase mb-2">Blog</p>
        <h1 className="text-3xl font-bold text-stone-800">ブログ</h1>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white border border-rose-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    categoryColors[post.category] ?? "bg-stone-100 text-stone-500"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-stone-400">{post.date}</span>
              </div>
              <h2 className="font-semibold text-stone-800 text-lg group-hover:text-rose-600 transition-colors mb-1">
                {post.title}
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
            </div>
            <span className="text-rose-400 text-2xl hidden sm:block">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
