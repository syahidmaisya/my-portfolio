'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3 md:pt-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`mx-auto w-full max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-black/75 backdrop-blur-2xl border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]'
            : 'bg-black/55 backdrop-blur-xl border-white/[0.06]'
        }`}
      >
        <div className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white tracking-tight"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Syahid
              <span className="text-neutral-500">.</span>
            </span>
            <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.25em] text-neutral-500 border border-white/[0.08] rounded-full px-2 py-1">
              Portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    active
                      ? 'text-white bg-white/[0.08] border border-white/[0.08]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black text-sm font-semibold px-5 py-3 hover:bg-neutral-200 transition-all"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-200 hover:text-white hover:border-white/20 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="md:hidden border-t border-white/[0.06]"
            >
              <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`rounded-xl px-4 py-3 text-sm transition-all ${
                        active
                          ? 'bg-white/[0.08] text-white border border-white/[0.08]'
                          : 'text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black text-sm font-semibold px-5 py-3 hover:bg-neutral-200 transition-all"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}