
'use client'
import { useState, useEffect } from "react";

export default function PremiumPage() {
  const [status, setStatus] = useState("Belum Premium");
  const [input, setInput] = useState("");

  useEffect(() => {
    const isPremium = localStorage.getItem("2beb_premium") === "true";
    if (isPremium) setStatus("Sudah Premium");
  }, []);

  const handleUnlock = () => {
    if (input === "2beb-vip-2025") {
      localStorage.setItem("2beb_premium", "true");
      setStatus("Sudah Premium");
      alert("Premium berhasil diaktifkan!");
    } else {
      alert("Token salah. Hubungi admin setelah donasi.");
    }
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold text-purple-500">Premium Access</h1>
      <p>Status Anda: <strong>{status}</strong></p>
      <input
        className="p-2 rounded bg-gray-900 text-white"
        placeholder="Masukkan kode premium"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleUnlock}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Unlock Premium
      </button>
    </div>
  );
}
