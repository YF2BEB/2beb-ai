
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di <span className="text-purple-500">2BEB Ai</span></h1>
      <p className="mb-6">Pilih fitur di sidebar untuk mulai membuat konten AI brutal.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg shadow">Buat Avatar</div><div className="p-4 bg-gray-800 rounded-lg shadow">Buat Konten Viral</div><div className="p-4 bg-gray-800 rounded-lg shadow">Buat Iklan Produk</div><div className="p-4 bg-gray-800 rounded-lg shadow">Iklan Jasa & Digital</div><div className="p-4 bg-gray-800 rounded-lg shadow">Buat Ebook</div><div className="p-4 bg-gray-800 rounded-lg shadow">Buat Lagu</div><div className="p-4 bg-gray-800 rounded-lg shadow">Avatar Tersimpan</div><div className="p-4 bg-gray-800 rounded-lg shadow">Riwayat</div>
      </div>
    </div>
  );
}
