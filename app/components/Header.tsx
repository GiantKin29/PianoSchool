"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "講師紹介" },
  { href: "/lessons", label: "レッスン" },
  { href: "/blog", label: "ブログ" },
  { href: "/contact", label: "体験レッスン申込" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-rose-700 tracking-wide">
          花音ピアノ教室
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) =>
            item.href === "/contact" ? (
              <Link
                key={item.href}
                href={item.href}
                className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone-600 hover:text-rose-600 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-stone-600"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-rose-100 px-4 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/contact"
                  ? "bg-rose-500 text-white text-center py-2 rounded-full text-sm font-medium"
                  : "text-stone-700 text-sm"
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
