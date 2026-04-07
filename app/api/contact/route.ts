import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, age, date, experience, message } = body;

    // 必須項目チェック
    if (!name || !email || !date) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    // メールアドレス形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "メールアドレスの形式が正しくありません" }, { status: 400 });
    }

    // 本番環境ではここでメール送信サービス（Resend等）を呼び出す
    // 例: await resend.emails.send({ from, to, subject, html })
    // 現在はコンソールログのみ（環境変数 RESEND_API_KEY を設定後に有効化）
    console.log("【体験レッスン申込】", {
      name,
      email,
      phone: phone || "未記入",
      age: age || "未記入",
      date,
      experience: experience || "未記入",
      message: message || "なし",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "サーバーエラーが発生しました" }, { status: 500 });
  }
}
