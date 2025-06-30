'use client';
import { useState } from 'react';

export default function Page() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    setResult('Sedang menghubungkan ke AI...');
    const res = await fetch(`/api/generate?feature=iklan-produk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResult(data.result || 'Gagal mendapatkan hasil.');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Buat Iklan Produk</h1>
      <textarea
        className="w-full h-32 p-2 mb-4 bg-gray-800 text-white rounded"
        placeholder="Tulis prompt kamu di sini..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
        onClick={handleGenerate}
      >
        Generate
      </button>
      <div className="mt-4 whitespace-pre-wrap bg-gray-800 p-4 rounded">{result}</div>
    </div>
  );
}