import Link from "next/link";
import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-100 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">{profile.schoolName}</h3>
          <p className="text-sm leading-relaxed text-rose-200">{profile.catchphrase}</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">メニュー</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/about", label: "講師紹介" },
              { href: "/lessons", label: "レッスン案内" },
              { href: "/blog", label: "ブログ" },
              { href: "/contact", label: "体験レッスン申込" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">お問い合わせ</h4>
          <address className="not-italic text-sm text-rose-200 space-y-1">
            <p>{profile.address}</p>
            <p>TEL: {profile.tel}</p>
            <p>Email: {profile.email}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-rose-800 text-center py-4 text-xs text-rose-400">
        © {new Date().getFullYear()} {profile.schoolName}. All rights reserved.
      </div>
    </footer>
  );
}
