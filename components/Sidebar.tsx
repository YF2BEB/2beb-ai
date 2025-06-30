
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const menuItems = [
  { label: 'Buat Avatar', href: '/avatar' },
  { label: 'Buat Konten Viral', href: '/konten-viral' },
  { label: 'Buat Iklan Produk', href: '/iklan-produk' },
  { label: 'Iklan Jasa & Digital', href: '/iklan-jasa' },
  { label: 'Buat Ebook', href: '/ebook' },
  { label: 'Buat Lagu', href: '/lagu' },
  { label: 'Avatar Tersimpan', href: '/avatar-tersimpan' },
  { label: 'Riwayat', href: '/riwayat' }
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-gray-800 p-4 space-y-2">
      <div className="text-xl font-bold text-purple-400 mb-4">2BEB Ai</div>
      {menuItems.map(({ label, href }) => (
        <Link key={href} href={href} className={clsx(
          'block px-4 py-2 rounded hover:bg-gray-700',
          pathname === href && 'bg-purple-700'
        )}>
          {label}
        </Link>
      ))}
    </aside>
  );
}
