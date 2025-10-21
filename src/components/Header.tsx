'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOverHero, setIsOverHero] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hero = document.getElementById('hero');
    if (!hero) {
      setIsOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(entry.isIntersecting);
      },
      { root: null, rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const containerBgClass = isOverHero
    ? 'bg-[#071736]/50 backdrop-blur'
    : 'bg-[#071736]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 ${containerBgClass} transition-colors`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:h-16 py-2 flex items-center justify-between flex-wrap gap-y-2">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/assets/logo_3.svg" alt="NALA" width={92} height={24} />
        </Link>
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-white/90">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/business" className="hover:text-white">For Business</Link>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/nala_business.apk" className="rounded-lg bg-sky-600 text-white px-4 py-2 text-sm font-medium hover:bg-sky-500 transition">Download</Link>
        </div>
      </div>
    </header>
  );
}


