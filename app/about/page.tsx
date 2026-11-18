import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Me | Certified Nutritionist | make diet plan",
  description: "Learn about my approach to Indian nutrition, clinical qualifications, experience, and philosophy of home-style eating.",
};

export default function AboutPage() {
  const credentials = [
    { label: "Qualification", value: "M.Sc. Food & Clinical Nutrition", icon: "🎓" },
    { label: "Certification", value: "Registered Dietitian (RD) / Nutritionist License", icon: "📜" },
    { label: "Experience", value: "10+ Years of Clinical & Pediatric Practice", icon: "⏳" },
    { label: "Focus Areas", value: "Pediatric Growth, PCOS, Diabetes & Family Nutrition", icon: "🎯" },
  ];

  const pillars = [
    {
      title: "Real Indian Home Food",
      desc: "No expensive exotic superfoods, no bland boiled salads, and no cutting out rotis, dals, or traditional family dishes. True health is built on recipes your family already cooks and enjoys.",
      icon: "🍲",
    },
    {
      title: "Science & Evidence-Based",
      desc: "Every recommendation is grounded in the latest ICMR-NIN Dietary Guidelines, WHO pediatric standards, and clinical biochemistry — not viral social media fads.",
      icon: "🔬",
    },
    {
      title: "Compassionate & Non-Restrictive",
      desc: "Guilt and starvation do not produce lasting wellness. We focus on nourishment, joyful meal rituals, mindful eating cues, and sustainable lifelong habits.",
      icon: "💚",
    },
    {
      title: "Pediatric Collaboration",
      desc: "For infants, school kids, and teens, meal plans are designed in harmonious alignment with your treating pediatrician, ensuring safe allergy and medical oversight.",
      icon: "🩺",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Ambient background glowing orbs */}
      <div className="absolute top-28 left-10 w-96 h-96 rounded-full glow-orb-green animate-pulse-soft -z-10" />
      <div className="absolute top-[600px] right-10 w-96 h-96 rounded-full glow-orb-amber -z-10" />

      {/* Hero / About Profile Header */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl glass-card glass-card-hover flex flex-col md:flex-row items-center gap-10 shadow-sm animate-fade-in-up">
            {/* Profile Photo with Frosted Glass Border */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-emerald-300/80 shrink-0 shadow-lg group">
              <Image
                src="/images/dietitian.jpg"
                alt="Certified Clinical Nutritionist & Pediatric Specialist"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                <div>
                  <p className="font-bold text-white text-sm">Certified Nutritionist</p>
                  <p className="text-[11px] text-emerald-200">Registered Dietitian</p>
                </div>
              </div>
            </div>

            {/* Profile Intro */}
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1b4332] glass-pill px-4 py-1.5 rounded-full mb-3">
                About Me
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                Hi, I&apos;m [Your Name]
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                I am a clinical nutritionist specializing in pediatric health, women&apos;s hormonal vitality,
                and family meal planning. My mission is simple: to make healthy eating feel effortless, culturally
                familiar, and deeply nourishing for modern Indian families.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  Book a consultation &rarr;
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="px-6 py-3 rounded-full glass-card glass-card-hover text-gray-800 font-semibold text-xs flex items-center gap-2"
                >
                  <span>💬</span> WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Credentials in Glass Cards */}
      <section className="py-12 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Qualifications &amp; Practice Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((cred, i) => (
              <div key={i} className="p-6 rounded-3xl glass-card glass-card-hover">
                <span className="text-3xl block mb-3">{cred.icon}</span>
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  {cred.label}
                </p>
                <p className="text-sm font-bold text-gray-900 mt-1 leading-snug">{cred.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Philosophy in Glass Cards */}
      <section className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider glass-pill px-3 py-1 rounded-full">
              Core Beliefs
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              My Approach to Nutrition
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Food is more than fuel — it is family heritage, comfort, and joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {pillars.map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card glass-card-hover">
                <div className="w-12 h-12 rounded-2xl glass-surface flex items-center justify-center text-2xl mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Highlight Banner with Real Wholesome Indian Food */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 md:h-80 w-full group">
            <Image
              src="/images/tiffin-prep.jpg"
              alt="Fresh Indian homestyle cooking with fresh produce and grains"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-8 md:p-12">
              <div className="max-w-md text-white">
                <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-xs mb-3 inline-block">
                  No Fad Diets
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                  Nourishment rooted in your kitchen traditions
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Every diet plan is calibrated around traditional, home-cooked Indian meals that the entire family can relish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic & Contact Card */}
      <section className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#1b4332] via-[#24523f] to-[#123124] text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Let&apos;s Work Together</h3>
          <p className="text-emerald-100/90 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            Whether you need help with your school-going child&apos;s tiffin and appetite, or personalized
            dietary therapy for diabetes or PCOS, I am here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-emerald-200 mb-8">
            <span>📍 [CLINIC ADDRESS]</span>
            <span>•</span>
            <span>💻 Online Video Consultations Available Worldwide</span>
            <span>•</span>
            <span>⏰ [CONSULTATION HOURS]</span>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            Start your diet plan today &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
