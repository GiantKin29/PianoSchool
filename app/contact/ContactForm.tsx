"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const e: Record<string, string> = {};
    if (!data.get("name")) e.name = "お名前を入力してください";
    if (!data.get("email")) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email") as string))
      e.email = "正しいメールアドレスを入力してください";
    if (!data.get("date")) e.date = "ご希望の日時を入力してください";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          age: data.get("age"),
          date: data.get("date"),
          experience: data.get("experience"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-bold text-stone-800 text-lg mb-2">送信が完了しました！</h3>
        <p className="text-stone-500 text-sm">
          ご連絡ありがとうございます。数日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          お名前 <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="山田 太郎"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
        {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          メールアドレス <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
        {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          電話番号（任意）
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="000-0000-0000"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          お子様の年齢 / ご自身の年代（任意）
        </label>
        <select
          name="age"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
        >
          <option value="">選択してください</option>
          <option>4〜6歳</option>
          <option>小学生</option>
          <option>中学生</option>
          <option>高校生</option>
          <option>大学生・20代</option>
          <option>30〜40代</option>
          <option>50代以上</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          ご希望の日時 <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          name="date"
          placeholder="例：月曜14時〜、土曜午前 など"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
        {errors.date && <p className="text-xs text-rose-500 mt-1">{errors.date}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          ピアノ経験
        </label>
        <select
          name="experience"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
        >
          <option value="">選択してください</option>
          <option>まったくの初心者</option>
          <option>少し経験あり（1年未満）</option>
          <option>経験あり（1〜3年）</option>
          <option>経験あり（3年以上）</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          メッセージ・ご質問（任意）
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="弾きたい曲や目標などお気軽にどうぞ"
          className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-rose-500 text-sm text-center">
          送信に失敗しました。恐れ入りますが直接メールにてご連絡ください。
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 text-white font-semibold py-3 rounded-full transition-colors"
      >
        {state === "submitting" ? "送信中…" : "申し込む（無料）"}
      </button>
    </form>
  );
}
