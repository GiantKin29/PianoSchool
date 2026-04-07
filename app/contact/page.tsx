import ContactForm from "./ContactForm";
import profile from "@/data/profile.json";

export const metadata = {
  title: "体験レッスン申込 | 花音ピアノ教室",
  description: "無料の体験レッスンにお申し込みください。",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <p className="text-rose-400 text-sm tracking-widest uppercase mb-2">Free Trial</p>
        <h1 className="text-3xl font-bold text-stone-800">体験レッスン申込</h1>
        <p className="text-stone-400 mt-3 text-sm">
          初回体験レッスン（30分）は無料です。お気軽にご連絡ください。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white border border-rose-100 rounded-2xl shadow-sm p-8">
          <h2 className="font-bold text-stone-800 text-lg mb-6">申し込みフォーム</h2>
          <ContactForm />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <h3 className="font-bold text-stone-700 mb-4">教室情報</h3>
            <address className="not-italic text-sm text-stone-600 space-y-2">
              <p>
                <span className="font-medium">教室名：</span>
                {profile.schoolName}
              </p>
              <p>
                <span className="font-medium">住所：</span>
                {profile.address}
              </p>
              <p>
                <span className="font-medium">TEL：</span>
                {profile.tel}
              </p>
              <p>
                <span className="font-medium">Email：</span>
                {profile.email}
              </p>
            </address>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-rose-100">
            <iframe
              src={profile.mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="教室の場所"
            ></iframe>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-700">
            <p className="font-medium mb-1">体験レッスンについて</p>
            <ul className="space-y-1 text-xs leading-relaxed">
              <li>・所要時間：約30分</li>
              <li>・料金：無料</li>
              <li>・持ち物：特になし（手ぶらでOK）</li>
              <li>・折り返しご連絡まで数日いただく場合があります</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
