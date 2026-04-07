import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return { title: `${post.title} | 花音ピアノ教室`, description: post.excerpt };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-rose-400 hover:underline text-sm mb-8 inline-block">
        ← ブログ一覧へ戻る
      </Link>

      <article className="bg-white rounded-2xl shadow-sm border border-rose-100 p-8 md:p-12">
        <div className="mb-6">
          <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
            {post.category}
          </span>
          <p className="text-stone-400 text-xs mt-2">{post.date}</p>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 leading-snug">
          {post.title}
        </h1>
        <div
          className="prose text-stone-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <div className="mt-12 bg-rose-50 rounded-2xl p-8 text-center border border-rose-100">
        <p className="text-stone-600 mb-4">体験レッスンのお申し込みはこちらから</p>
        <Link
          href="/contact"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          無料体験レッスンに申し込む
        </Link>
      </div>
    </div>
  );
}
