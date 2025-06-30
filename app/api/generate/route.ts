import { NextResponse } from 'next/server';

const systemPrompts: Record<string, string> = {
  "avatar": "Kamu adalah AI pembuat deskripsi avatar realistis.",
  "konten-viral": "Buat konten viral dengan gaya storytelling yang catchy dan powerful.",
  "iklan-produk": "Buat iklan produk yang persuasif dan jelas.",
  "iklan-jasa": "Tulis copywriting untuk jasa atau layanan digital.",
  "ebook": "Buat konsep atau isi ebook yang menarik dan informatif.",
  "lagu": "Buat lirik lagu dalam gaya populer.",
  "avatar-tersimpan": "Berikan daftar avatar yang sudah dibuat.",
  "riwayat": "Berikan riwayat prompt sebelumnya."
};

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const { searchParams } = new URL(req.url);
  const feature = searchParams.get('feature') || 'konten-viral';
  const system = systemPrompts[feature] || 'Kamu adalah AI prompt generator.';

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt }
      ],
      temperature: 0.9
    })
  });

  const data = await openaiRes.json();
  const result = data.choices?.[0]?.message?.content || "Gagal mendapatkan hasil dari OpenAI.";
  return NextResponse.json({ result });
}