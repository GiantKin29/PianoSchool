import Link from "next/link";
import lessonsData from "@/data/lessons.json";
import scheduleData from "@/data/schedule.json";

export const metadata = {
  title: "レッスン案内 | 花音ピアノ教室",
  description: "コース内容・料金・スケジュールをご紹介します。",
};

const statusMap = {
  open: { label: "○ 空きあり", color: "bg-emerald-100 text-emerald-700" },
  few: { label: "△ 残りわずか", color: "bg-amber-100 text-amber-700" },
  full: { label: "✕ 満席", color: "bg-rose-100 text-rose-500" },
} as const;

const days = ["月曜日", "水曜日", "木曜日", "土曜日"];

export default function LessonsPage() {
  const slotsByDay = days.map((day) => ({
    day,
    slots: scheduleData.slots.filter((s) => s.day === day),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <p className="text-rose-400 text-sm tracking-widest uppercase mb-2">Lesson Info</p>
        <h1 className="text-3xl font-bold text-stone-800">レッスン案内</h1>
      </div>

      {/* Courses */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-400 rounded inline-block"></span>
          コース一覧・料金
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {lessonsData.courses.map((course) => (
            <div
              key={course.name}
              className="bg-white border border-rose-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-stone-800 text-lg mb-1">{course.name}</h3>
              <p className="text-xs text-rose-400 mb-3">{course.age}</p>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">{course.description}</p>
              <div className="border-t border-rose-50 pt-3 space-y-1">
                <p className="text-xs text-stone-400">
                  <span className="font-medium text-stone-600">時間：</span>
                  {course.duration}
                </p>
                <p className="text-xs text-stone-400">
                  <span className="font-medium text-stone-600">料金：</span>
                  {course.fee}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-4 text-right">
          ※ 料金はすべて税込み。入会金：5,000円（初回のみ）
        </p>
      </section>

      {/* Schedule */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-stone-800 mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-400 rounded inline-block"></span>
          レッスンスケジュール
        </h2>
        <p className="text-stone-400 text-sm mb-6">空き状況は随時更新しています。</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {slotsByDay.map(({ day, slots }) => (
            <div key={day} className="bg-white border border-rose-100 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-stone-700 mb-3">{day}</h3>
              <div className="space-y-2">
                {slots.map((slot, i) => {
                  const s = statusMap[slot.status as keyof typeof statusMap];
                  return (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-stone-600">{slot.time}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.color}`}>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-rose-400 rounded inline-block"></span>
          よくあるご質問
        </h2>
        <div className="space-y-4">
          {lessonsData.faq.map((item, i) => (
            <details
              key={i}
              className="bg-white border border-rose-100 rounded-xl p-5 shadow-sm group"
            >
              <summary className="font-medium text-stone-800 cursor-pointer flex justify-between items-center list-none">
                <span>Q. {item.question}</span>
                <span className="text-rose-400 text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-stone-500 text-sm leading-relaxed">A. {item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-rose-50 rounded-2xl p-8 text-center border border-rose-100">
        <p className="text-stone-600 mb-4">ご不明な点はお気軽にお問い合わせください。</p>
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
