'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/src/features/core/components/ui/button';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '/Home' },
    { label: 'Experience', href: '/Experience' },
    { label: 'Projects', href: '/Projects' },
    { label: 'Certificate', href: '/Certificate' },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    const normalizedPathname = pathname.toLowerCase();
    const normalizedHref = href.toLowerCase();
    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(normalizedHref + '/')
    );
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:bg-black/80 dark:border-neutral-700">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-lg font-semibold">Portfolio</span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant={isActive(item.href) ? 'default' : 'ghost'}
                className="rounded-full px-5"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            {/* DARK MODE TOGGLE DESKTOP */}
            <Button
              onClick={toggleTheme}
              variant="outline"
              className="rounded-full px-4"
            >
              {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </Button>
          </nav>

          {/* MOBILE: dark mode + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="rounded-full px-3"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1"
            >
              <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
              <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
              <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="mt-4 flex flex-col gap-2 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive(item.href)
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}