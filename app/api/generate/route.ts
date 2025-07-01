import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || prompt.trim().length === 0) {
      return Response.json({ result: "Prompt kosong atau tidak valid." });
    }

    const chat = await openai.chat.completions.create({
      model: "gpt-4", // atau gpt-3.5-turbo jika ingin cepat
      messages: [
        {
          role: "system",
          content: "Kamu adalah AI kreatif untuk membuat avatar, iklan, konten viral, ebook, lagu, dsb."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,
      max_tokens: 1000
    });

    const result = chat.choices[0]?.message?.content;
    return Response.json({ result });

  } catch (error: any) {
    console.error("❌ Error from OpenAI:", error);
    return Response.json({ result: `Gagal: ${error?.message || "Terjadi kesalahan."}` });
  }
}
