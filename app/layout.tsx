
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: '2BEB Ai',
  description: 'AI Prompt Generator brutal semua fitur aktif'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="flex bg-gray-900 text-white min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
