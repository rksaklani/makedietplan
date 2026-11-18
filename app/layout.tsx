import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "make diet plan | Nutrition & Diet Plans",
  description:
    "Science-backed meal plans for school-going children and families, based on ICMR-NIN guidelines. Book a consultation with a certified nutritionist.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/icon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-emerald-200 selection:text-emerald-950 font-sans">{children}</body>
    </html>
  );
}
