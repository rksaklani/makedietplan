import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Clinical Nutrition Services & Pediatric Stages | The Healthy Tiffin Times",
  description: "Personalized diet plans for weight management, PCOS, diabetes, thyroid, gut health, and every stage of childhood.",
};

export default function ServicesPage() {
  const adultServices = [
    {
      icon: "⚖️",
      title: "Sustainable Weight Management",
      desc: "Healthy, long-term weight reduction or healthy mass gain without extreme carb deprivation or rebound hunger.",
      points: ["Macro-balanced homestyle food", "No crash calorie deficits", "Metabolism-protective pacing"],
      bg: "bg-gradient-to-br from-emerald-500/12 via-emerald-100/40 to-white",
      border: "border-emerald-200 hover:border-emerald-400",
      iconBg: "bg-emerald-100 text-emerald-800",
      image: "/images/healthy-ingredients.jpg",
    },
    {
      icon: "🩺",
      title: "Diabetes, Thyroid & Blood Pressure",
      desc: "Therapeutic culinary strategies focused on stabilizing glycemic response, TSH/T3/T4 balance, and cardiovascular health.",
      points: ["Low glycemic whole grains", "Anti-inflammatory seasonings", "Lab report metric tracking"],
      bg: "bg-gradient-to-br from-sky-500/12 via-sky-100/40 to-white",
      border: "border-sky-200 hover:border-sky-400",
      iconBg: "bg-sky-100 text-sky-800",
      image: "/images/clinical-care.jpg",
    },
    {
      icon: "🌸",
      title: "PCOS, Hormones & Women's Health",
      desc: "Hormone-friendly nutrition across PCOS cycle regulation, preconception fertility, pregnancy, and postpartum recovery.",
      points: ["Androgen balancing nutrients", "Insulin-sensitizing foods", "Safe postpartum lactation support"],
      bg: "bg-gradient-to-br from-rose-500/12 via-rose-100/40 to-white",
      border: "border-rose-200 hover:border-rose-400",
      iconBg: "bg-rose-100 text-rose-800",
      image: "/images/women-health.jpg",
    },
    {
      icon: "⚡",
      title: "Sports Nutrition & Athletic Fuel",
      desc: "Calibrated meal timetables for youth athletes, endurance runners, and muscle recovery without artificial additives.",
      points: ["Carb-loading & hydration windows", "Whole food recovery snacks", "Endurance & stamina focus"],
      bg: "bg-gradient-to-br from-amber-500/12 via-amber-100/40 to-white",
      border: "border-amber-200 hover:border-amber-400",
      iconBg: "bg-amber-100 text-amber-800",
      image: "/images/sports-fitness.jpg",
    },
  ];

  const childhoodStages = [
    {
      age: "0–6 months",
      title: "Newborn Care",
      emoji: "👶",
      desc: "Breastfeeding support, maternal diet optimization for milk production, and gentle guidance on formula feeding when indicated.",
      bg: "bg-gradient-to-br from-pink-500/10 via-pink-100/40 to-white",
      border: "border-pink-200 hover:border-pink-400",
      badge: "bg-pink-100 text-pink-800",
    },
    {
      age: "6–12 months",
      title: "Infant Weaning",
      emoji: "🍼",
      desc: "Stage-by-stage solid food introduction: single-ingredient purées, finger foods, iron-dense pulses, and allergy surveillance schedules.",
      bg: "bg-gradient-to-br from-blue-500/10 via-blue-100/40 to-white",
      border: "border-blue-200 hover:border-blue-400",
      badge: "bg-blue-100 text-blue-800",
    },
    {
      age: "1–3 years",
      title: "Toddler Nutrition",
      emoji: "🧒",
      desc: "Family meal assimilation, nutrient-rich bite-sized snacks, and practical behavioral protocols for early food refusal phases.",
      bg: "bg-gradient-to-br from-amber-500/10 via-amber-100/40 to-white",
      border: "border-amber-200 hover:border-amber-400",
      badge: "bg-amber-100 text-amber-800",
    },
    {
      age: "3–5 years",
      title: "Preschool Growth",
      emoji: "🌱",
      desc: "Balanced colorful plates for cellular growth, immune resistance against recurrent daycare bugs, and establishing wholesome eating norms.",
      bg: "bg-gradient-to-br from-emerald-500/10 via-emerald-100/40 to-white",
      border: "border-emerald-200 hover:border-emerald-400",
      badge: "bg-emerald-100 text-emerald-800",
    },
    {
      age: "6–12 years",
      title: "School-Age Kids",
      emoji: "🎒",
      desc: "Smart tiffin lunchbox ideas, brain-boosting omega-3 & iron foods, and sensitive intervention for underweight or overweight children.",
      bg: "bg-gradient-to-br from-purple-500/10 via-purple-100/40 to-white",
      border: "border-purple-200 hover:border-purple-400",
      badge: "bg-purple-100 text-purple-800",
    },
    {
      age: "13–18 years",
      title: "Adolescents & Teens",
      emoji: "🧑",
      desc: "Nutrition for adolescent growth spurts, exam fatigue, sports endurance, skin acne/PCOS, and nurturing a respectful body relationship.",
      bg: "bg-gradient-to-br from-teal-500/10 via-teal-100/40 to-white",
      border: "border-teal-200 hover:border-teal-400",
      badge: "bg-teal-100 text-teal-800",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Ambient glass background glow */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full glow-orb-green animate-pulse-soft -z-10" />
      <div className="absolute top-[600px] left-10 w-96 h-96 rounded-full glow-orb-amber -z-10" />

      {/* Hero with Full Banner Background Image */}
      <section className="pt-36 pb-24 px-4 relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Full Banner Background Image: Fresh Colorful Fruits & Vegetables */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/services-fruits-veg-bg.jpg"
            alt="Abundant fresh organic vegetables, fruits and herbs nutrition spread"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105"
            priority
          />
          {/* Frosted glass gradient overlay: keeps the fruits & veggies visible while preserving crystal clear readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ef]/92 via-[#faf6ef]/80 to-[#faf6ef]/70 backdrop-blur-[1.5px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#faf6ef]" />
        </div>

        <div className="max-w-6xl mx-auto text-center animate-fade-in-up relative z-10 w-full">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1b4332] glass-pill px-4 py-1.5 rounded-full mb-4">
            Comprehensive Clinical Practice
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
            Diet Plans Built Around Your Body, Food &amp; Routine
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Evidence-based nutritional counseling tailored to individual blood markers, metabolic health,
            and pediatric developmental milestones.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 btn-shine font-display"
          >
            Book Your Consultation Now &rarr;
          </Link>
        </div>
      </section>

      {/* Adult Clinical Programs */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider glass-pill px-3 py-1 rounded-full">
              Clinical Care
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Clinical Nutrition Programs
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Tailored 1-on-1 consultations for adults and youth with therapeutic requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adultServices.map((service, i) => (
              <div
                key={i}
                className={`rounded-3xl ${service.bg} backdrop-blur-xl border ${service.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-2xl ${service.iconBg} backdrop-blur-md flex items-center justify-center text-2xl shadow-xs`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <div className="pt-5 border-t border-gray-200/50">
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      {service.points.map((pt, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-white text-emerald-800 text-[10px] font-bold flex items-center justify-center shadow-xs">
                            ✓
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Childhood Stage Plans */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 glass-pill px-3.5 py-1 rounded-full">
              Pediatric Specialization
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Diet Plans for Every Stage of Childhood
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              From an infant&apos;s first purées to a teenager&apos;s rapid growth spurts, plans respect appetite, family food habits, and pediatric advice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {childhoodStages.map((stage, i) => (
              <div
                key={i}
                className={`p-7 rounded-3xl ${stage.bg} backdrop-blur-xl border ${stage.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl animate-float">{stage.emoji}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${stage.badge}`}>
                    {stage.age}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{stage.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Clinical Coordination Note */}
          <div className="mt-10 p-5 rounded-2xl glass-card text-center text-xs text-emerald-900 font-medium">
            <strong>Pediatrician Partnership:</strong> Children&apos;s therapeutic plans are coordinated directly with your
            treating pediatrician where diagnosed allergies, cardiac, or metabolic disorders exist.
          </div>
        </div>
      </section>

      {/* What Every Plan Includes */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#1b4332] via-[#24523f] to-[#123124] text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Transparent Care Structure
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">What Every Consultation Includes</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                We believe in practical home food, not exotic ingredients or starvation menus.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Detailed Intake Audit", desc: "Exhaustive review of health history, symptoms, medical reports, and current meal timing." },
                { title: "100% Homestyle Meals", desc: "Customized menus matching vegetarian, non-veg, Jain, or vegan cooking traditions." },
                { title: "Regular Adjustments", desc: "Periodic reviews to fine-tune macros as energy levels, exams, or growth phases change." },
                { title: "Direct WhatsApp Support", desc: "Prompt answers between official reviews for dining out, travel snacks, and ingredient questions." },
              ].map((inc, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="w-6 h-6 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center text-xs font-bold mb-3">
                    ✓
                  </span>
                  <h4 className="font-bold text-white text-sm mb-1">{inc.title}</h4>
                  <p className="text-xs text-emerald-100/80 leading-relaxed">{inc.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center pt-8 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                Schedule Your Assessment &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
