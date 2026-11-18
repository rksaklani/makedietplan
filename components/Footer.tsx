import Link from "next/link";

export default function Footer() {
  const menuLinks = [
    { label: "Services", href: "/services" },
    { label: "Kids", href: "/kids" },
    { label: "How it works", href: "/how-it-works" },
    { label: "About", href: "/about" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 py-9 px-6 lg:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-7">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg text-white mb-2.5 font-display">
              <svg
                className="w-5 h-5 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <span>The Healthy Tiffin Times</span>
            </Link>
            <p className="text-xs leading-relaxed text-gray-400 max-w-sm mb-2">
              A diet plan built around your body, your food and your routine. Personalized meal plans and guidance
              for children, teenagers, and families.
            </p>
            <p className="text-[11px] text-gray-500">
              Guideline benchmarks verified against ICMR-NIN 2020 &amp; Dietary Guidelines for Indians 2024.
            </p>
          </div>

          {/* Clean Menu Items */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2.5 font-display">Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              {menuLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-emerald-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Consultation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2.5 font-display">Consultation</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Personalized meal plans and one-to-one guidance for weight, PCOS, diabetes, and child nutrition.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors shadow-xs"
            >
              Book a consultation &rarr;
            </Link>
          </div>
        </div>

        <div className="pt-5 border-t border-gray-900/80 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <p>© 2026 The Healthy Tiffin Times. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-400">
              Services
            </Link>
            <Link href="/kids" className="hover:text-gray-400">
              Kids
            </Link>
            <Link href="/how-it-works" className="hover:text-gray-400">
              How it works
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
