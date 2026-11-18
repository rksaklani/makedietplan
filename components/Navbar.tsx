"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Services", href: "/services" },
    { label: "Kids", href: "/kids" },
    { label: "How it works", href: "/how-it-works" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Brand: Logo */}
        <Link href="/" className="flex items-center gap-3 group py-1">
          <div className="relative h-16 w-56 sm:h-20 sm:w-64 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/logo-nav.webp"
              alt="make diet plan logo"
              fill
              sizes="(max-width: 640px) 224px, 256px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-2xs">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#1b4332] font-bold shadow-xs border border-emerald-100"
                      : "text-[#3f574d] hover:text-[#1b4332] hover:bg-white/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Book a consultation pill button */}
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 btn-shine font-display"
          >
            Book a consultation
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden p-2 rounded-xl text-[#1b4332] hover:bg-white/80 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <div className="space-y-1.5 w-6">
              <span className="block h-0.5 bg-[#1b4332] w-full transition-all"></span>
              <span className="block h-0.5 bg-[#1b4332] w-full transition-all"></span>
              <span className="block h-0.5 bg-[#1b4332] w-full transition-all"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden glass-card border-t border-white/60 px-6 py-5 space-y-3 shadow-xl animate-fade-in-up">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-xl text-base transition-colors ${
                  isActive
                    ? "bg-white/90 text-[#1b4332] font-bold shadow-2xs"
                    : "text-[#3f574d] font-medium hover:bg-white/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-full bg-[#1b4332] text-white text-sm font-semibold shadow-md"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
