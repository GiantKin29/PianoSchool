import Link from "next/link";
import profile from "@/data/profile.json";

export const metadata = {
  title: "講師紹介 | 花音ピアノ教室",
  description: "講師・山田花音のプロフィールと演奏実績をご紹介します。",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-rose-400 text-sm tracking-widest uppercase mb-2">Teacher Profile</p>
        <h1 className="text-3xl font-bold text-stone-800">講師紹介</h1>
      </div>

      {/* Profile */}
      <section className="bg-white rounded-3xl shadow-sm border border-rose-100 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center mb-14">
        <div className="flex-shrink-0 w-48 h-48 rounded-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center shadow">
          <span className="text-6xl">🎹</span>
        </div>
        <div>
          <p className="text-rose-400 text-sm mb-1">{profile.title}</p>
          <h2 className="text-2xl font-bold text-stone-800 mb-1">{profile.name}</h2>
          <p className="text-stone-400 text-sm mb-4">{profile.nameEn}</p>
          <p className="text-stone-600 leading-relaxed">{profile.bio}</p>
        </div>
      </section>

      {/* YouTube */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-400 rounded inline-block"></span>
          演奏動画
        </h2>
        <div className="bg-rose-50 rounded-2xl p-6 text-center">
          <p className="text-stone-500 text-sm mb-4">YouTubeで演奏動画を公開しています</p>
          <a
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.972 2.972 0 0 0-2.09-2.103C19.51 3.6 12 3.6 12 3.6s-7.51 0-9.408.483A2.972 2.972 0 0 0 .502 6.186 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .502 5.814 2.972 2.972 0 0 0 2.09 2.103C4.49 20.4 12 20.4 12 20.4s7.51 0 9.408-.483a2.972 2.972 0 0 0 2.09-2.103A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
            </svg>
            YouTubeチャンネルを見る
          </a>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-400 rounded inline-block"></span>
          主な実績・経歴
        </h2>
        <div className="relative border-l-2 border-rose-200 ml-4 space-y-6">
          {profile.achievements.map((item, i) => (
            <div key={i} className="pl-8 relative">
              <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-rose-400 border-2 border-white shadow"></div>
              <p className="text-xs text-rose-400 font-semibold mb-1">{item.year}</p>
              <p className="text-stone-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-rose-50 rounded-2xl p-8 text-center border border-rose-100">
        <p className="text-stone-600 mb-4">
          まずは無料の体験レッスンで、教室の雰囲気を体感してください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          体験レッスンに申し込む（無料）
        </Link>
      </div>
    </div>
  );
}
