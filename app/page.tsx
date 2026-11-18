import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const includes = [
    "Detailed assessment of health history, lifestyle and food habits",
    "Customised meal plan — veg, non-veg, Jain or vegan",
    "Regular follow-ups and plan adjustments",
    "Support between sessions on call or WhatsApp",
  ];

  const services = [
    {
      icon: "⚖️",
      title: "Weight management",
      desc: "Sustainable weight loss or healthy weight gain, without crash diets.",
      bg: "bg-gradient-to-br from-emerald-500/12 via-emerald-100/50 to-white",
      border: "border-emerald-200/90 hover:border-emerald-400",
      iconBg: "bg-emerald-100/90 text-emerald-800",
      accent: "text-emerald-800",
      image: "/images/healthy-ingredients.jpg",
    },
    {
      icon: "🩺",
      title: "Diabetes, thyroid & BP",
      desc: "Therapeutic diets that support blood sugar, thyroid and heart health.",
      bg: "bg-gradient-to-br from-sky-500/12 via-sky-100/50 to-white",
      border: "border-sky-200/90 hover:border-sky-400",
      iconBg: "bg-sky-100/90 text-sky-800",
      accent: "text-sky-800",
      image: "/images/clinical-care.jpg",
    },
    {
      icon: "🌸",
      title: "PCOS & women's health",
      desc: "Hormone-friendly nutrition, plus pregnancy and postpartum plans.",
      bg: "bg-gradient-to-br from-rose-500/12 via-rose-100/50 to-white",
      border: "border-rose-200/90 hover:border-rose-400",
      iconBg: "bg-rose-100/90 text-rose-800",
      accent: "text-rose-800",
      image: "/images/women-health.jpg",
    },
    {
      icon: "⚡",
      title: "Sports & fitness",
      desc: "Fuel for training, muscle gain and recovery.",
      bg: "bg-gradient-to-br from-amber-500/12 via-amber-100/50 to-white",
      border: "border-amber-200/90 hover:border-amber-400",
      iconBg: "bg-amber-100/90 text-amber-800",
      accent: "text-amber-800",
      image: "/images/sports-fitness.jpg",
    },
  ];

  const kidsStages = [
    {
      age: "0–6 months",
      label: "Newborns",
      desc: "Breastfeeding support & nursing nutrition",
      bg: "bg-gradient-to-br from-pink-500/10 via-pink-100/40 to-white",
      border: "border-pink-200 hover:border-pink-400",
      badge: "bg-pink-100 text-pink-800 border-pink-200",
      emoji: "👶",
      image: "/images/stage-newborn.jpg",
    },
    {
      age: "6–12 months",
      label: "Infants",
      desc: "Starting solids, iron purées & weaning schedule",
      bg: "bg-gradient-to-br from-blue-500/10 via-blue-100/40 to-white",
      border: "border-blue-200 hover:border-blue-400",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      emoji: "🍼",
      image: "/images/stage-infant.jpg",
    },
    {
      age: "1–3 years",
      label: "Toddlers",
      desc: "Family meals, healthy snacks & picky eating help",
      bg: "bg-gradient-to-br from-amber-500/10 via-amber-100/40 to-white",
      border: "border-amber-200 hover:border-amber-400",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      emoji: "🧒",
      image: "/images/stage-toddler.jpg",
    },
    {
      age: "3–5 years",
      label: "Preschoolers",
      desc: "Balanced plates for growth, energy & immunity",
      bg: "bg-gradient-to-br from-emerald-500/10 via-emerald-100/40 to-white",
      border: "border-emerald-200 hover:border-emerald-400",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      emoji: "🌱",
      image: "/images/stage-preschool.jpg",
    },
    {
      age: "6–12 years",
      label: "School-age kids",
      desc: "Tiffin ideas, brain foods & growth percentiles",
      bg: "bg-gradient-to-br from-purple-500/10 via-purple-100/40 to-white",
      border: "border-purple-200 hover:border-purple-400",
      badge: "bg-purple-100 text-purple-800 border-purple-200",
      emoji: "🎒",
      image: "/images/stage-school.jpg",
    },
    {
      age: "13–18 years",
      label: "Teenagers",
      desc: "Growth spurts, exams, sports fuel & positive habits",
      bg: "bg-gradient-to-br from-teal-500/10 via-teal-100/40 to-white",
      border: "border-teal-200 hover:border-teal-400",
      badge: "bg-teal-100 text-teal-800 border-teal-200",
      emoji: "🧑",
      image: "/images/stage-teen.jpg",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Send an enquiry",
      desc: "Fill in the form with your goal. I'll get back to you within 24 hours.",
      bg: "bg-gradient-to-br from-emerald-500/12 via-emerald-100/40 to-white",
      border: "border-emerald-200 hover:border-emerald-400",
      numBg: "bg-emerald-700 text-white",
      image: "/images/step-enquiry.jpg",
    },
    {
      num: "2",
      title: "Consultation",
      desc: "An online or in-clinic session to understand your health, reports and routine.",
      bg: "bg-gradient-to-br from-teal-500/12 via-teal-100/40 to-white",
      border: "border-teal-200 hover:border-teal-400",
      numBg: "bg-teal-700 text-white",
      image: "/images/step-consult.jpg",
    },
    {
      num: "3",
      title: "Your plan & follow-ups",
      desc: "Receive your personalised plan, then check in regularly as we fine-tune it.",
      bg: "bg-gradient-to-br from-amber-500/12 via-amber-100/40 to-white",
      border: "border-amber-200 hover:border-amber-400",
      numBg: "bg-amber-600 text-white",
      image: "/images/step-plan.jpg",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Ambient background glow orbs for glassmorphism */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full glow-orb-green animate-pulse-glow -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 rounded-full glow-orb-amber animate-pulse-glow animation-delay-200 -z-10" />
      <div className="absolute top-[900px] left-1/3 w-[500px] h-[500px] rounded-full glow-orb-teal -z-10" />

      {/* ── HERO SECTION WITH FULL BANNER BACKGROUND IMAGE ── */}
      <section className="pt-32 pb-24 px-4 relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full Banner Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-banner-bg.jpg"
            alt="Healthy fresh organic nutrition spread banner background"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105"
            priority
          />
          {/* Subtle multi-layer frosted gradient overlays to keep text 100% sharp and brand colors intact */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ef]/95 via-[#faf6ef]/85 to-[#faf6ef]/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#faf6ef]" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b4332] glass-pill px-4 py-1.5 rounded-full mb-6 font-display">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Certified Nutritionist · [YOUR CREDENTIAL]
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08] mb-6">
                A diet plan built around <span className="text-gradient">your body,</span> your food and your routine.
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                Personalised meal plans and one-to-one guidance for weight management, PCOS, diabetes,
                gut health and more — with home-style food you actually enjoy.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 btn-shine font-display"
                >
                  Get your diet plan &rarr;
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="px-7 py-4 rounded-full glass-card glass-card-hover text-gray-800 font-semibold text-sm flex items-center gap-2 font-display"
                >
                  <span className="text-lg">💬</span> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Frosted Glass Card: What every plan includes + Hero Plate */}
            <div className="lg:col-span-5 animate-fade-in-up animation-delay-200">
              <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 via-white/80 to-amber-500/10 backdrop-blur-xl border border-white/90 shadow-xl overflow-hidden group">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src="/images/hero-bowl.jpg"
                    alt="Nutritious wholesome bowl with fresh ingredients"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/80 backdrop-blur-md border border-emerald-400/30">
                      🥗 Real, Homestyle Nutrition
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 relative">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-200/50 blur-2xl group-hover:scale-125 transition-transform" />
                  <h3 className="font-extrabold text-gray-900 text-xl mb-5 flex items-center gap-2">
                    <span className="text-2xl">✨</span> What every plan includes
                  </h3>
                  <ul className="space-y-3.5">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#1b4332] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          ✓
                        </span>
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. SERVICES SECTION (MULTIPLE COLORS) ── */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider glass-pill px-3.5 py-1 rounded-full">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Diet planning for every goal
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors flex items-center gap-1 group font-display"
            >
              <span>View detailed clinical services</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`rounded-3xl ${s.bg} backdrop-blur-xl border ${s.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`w-10 h-10 rounded-xl ${s.iconBg} backdrop-blur-md flex items-center justify-center text-xl shadow-xs`}>
                      {s.icon}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. KIDS SECTION (MULTIPLE COLORS) ── */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider glass-pill px-3.5 py-1 rounded-full">
                Children&apos;s Nutrition
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Diet plans for every stage of childhood
              </h2>
              <p className="text-gray-600 text-sm mt-2 max-w-xl">
                From a baby&apos;s first foods to a teenager&apos;s growth spurts, plans are matched to your
                child&apos;s age, growth, appetite and family food habits.
              </p>
            </div>
            <Link
              href="/kids"
              className="shrink-0 px-6 py-2.5 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 self-start sm:self-auto btn-shine font-display"
            >
              Book for your child &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidsStages.map((st, i) => (
              <div
                key={i}
                className={`rounded-3xl ${st.bg} backdrop-blur-xl border ${st.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={st.image}
                    alt={`${st.label} nutrition`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between p-3.5">
                    <span className="text-2xl drop-shadow-md">{st.emoji}</span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${st.badge}`}>
                      {st.age}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-1.5">{st.label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/kids"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 py-2.5 px-5 rounded-full glass-pill hover:bg-white transition-all font-display shadow-xs"
            >
              <span>Explore Tiffin Week, Portion Guidelines &amp; ICMR Data on the Kids Page</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS SECTION (MULTIPLE COLORS) ── */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider glass-pill px-3.5 py-1 rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Three simple steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, i) => (
              <div
                key={i}
                className={`rounded-3xl ${st.bg} backdrop-blur-xl border ${st.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={st.image}
                    alt={st.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <div className={`w-10 h-10 rounded-xl ${st.numBg} flex items-center justify-center text-lg font-black shadow-md`}>
                      {st.num}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{st.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 py-2.5 px-5 rounded-full glass-pill hover:bg-white transition-all font-display shadow-xs"
            >
              <span>See complete consultation breakdown &amp; FAQs</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT PREVIEW ── */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-white/85 to-teal-500/10 backdrop-blur-xl border border-white/90 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-2 border-emerald-300/80 shrink-0 shadow-lg group">
              <Image
                src="/images/dietitian.jpg"
                alt="Clinical Dietitian and Pediatric Nutritionist"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full bg-emerald-950/70 backdrop-blur-xs">
                  Certified Nutritionist
                </span>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider glass-pill px-3.5 py-1 rounded-full">
                About Me
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-3">
                Hi, I&apos;m [YOUR NAME]
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Clinical nutritionist specializing in pediatric health, maternal dietetics, and metabolic wellness.
                Dedicated to helping Indian families nourish their bodies with joyful, unrestrictive home meals.
              </p>
              <div className="space-y-1 text-xs text-gray-600 mb-6">
                <p>• M.Sc. Food &amp; Clinical Nutrition</p>
                <p>• Registered Dietitian &amp; Pediatric Specialist</p>
                <p>• 10+ years of compassionate clinical practice</p>
              </div>
              <Link
                href="/about"
                className="inline-block px-7 py-3 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 btn-shine font-display"
              >
                Read full bio &amp; philosophy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CONTACT CTA BANNER ── */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#1b4332] via-[#24523f] to-[#123124] text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Start your diet plan</h2>
          <p className="text-emerald-100/90 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Tell me a little about yourself and your goal. I&apos;ll reply to schedule your first consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-9 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-100 btn-shine font-display"
          >
            Request a consultation &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
