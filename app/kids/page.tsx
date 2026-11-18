import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Diet Plans for Every Stage of Childhood | The Healthy Tiffin Times",
  description: "From a baby's first foods to a teenager's growth spurts, plans are matched to your child's age, growth, appetite and family food habits.",
};

export default function KidsPage() {
  const ageStages = [
    {
      range: "0–6 months",
      title: "Newborns",
      desc: "Breastfeeding support and nutrition for nursing mothers, plus guidance on formula feeding when needed.",
      tagBg: "bg-[#fef2e8] text-[#9a4a24] border-[#fbd8be]",
      image: "/images/stage-newborn.jpg",
    },
    {
      range: "6–12 months",
      title: "Infants",
      desc: "Starting solids: first foods, textures, iron-rich purées and a weaning schedule.",
      tagBg: "bg-[#fef2e8] text-[#9a4a24] border-[#fbd8be]",
      image: "/images/stage-infant.jpg",
    },
    {
      range: "1–3 years",
      title: "Toddlers",
      desc: "Family meals, healthy snacks and practical help with picky eating.",
      tagBg: "bg-[#fef2e8] text-[#9a4a24] border-[#fbd8be]",
      image: "/images/stage-toddler.jpg",
    },
    {
      range: "3–5 years",
      title: "Preschoolers",
      desc: "Balanced plates for growth, energy and immunity, plus building good food habits early.",
      tagBg: "bg-[#fef2e8] text-[#9a4a24] border-[#fbd8be]",
      image: "/images/stage-preschool.jpg",
    },
    {
      range: "6–12 years",
      title: "School-age kids",
      desc: "Tiffin ideas, brain-friendly foods, and support for underweight or overweight children.",
      tagBg: "bg-[#fef2e8] text-[#9a4a24] border-[#fbd8be]",
      image: "/images/stage-school.jpg",
    },
    {
      range: "13–18 years",
      title: "Teenagers",
      desc: "Nutrition for growth spurts, sports, exams, acne and PCOS, and a healthy relationship with food.",
      tagBg: "bg-[#fef2e8] text-[#9a4a24] border-[#fbd8be]",
      image: "/images/stage-teen.jpg",
    },
  ];

  const helpTags = [
    "Food allergies",
    "Anaemia",
    "Poor weight gain",
    "Childhood obesity",
    "Constipation",
    "Picky eating",
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#faf6ef]">
      <Navbar />

      {/* Ambient background glow orbs */}
      <div className="absolute top-28 left-8 w-96 h-96 rounded-full glow-orb-green animate-pulse-glow -z-10" />
      <div className="absolute top-[400px] right-10 w-96 h-96 rounded-full glow-orb-amber -z-10" />

      {/* ── TOP SECTION (EXACT DESIGN MATCHING USER IMAGE) ── */}
      <section className="pt-32 pb-14 px-6 lg:px-12 bg-[#faf6ef] border-b border-[#ebdccb]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#b45309] mb-3 font-display">
                CHILDREN&apos;S NUTRITION
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#1b4332] tracking-tight leading-[1.12] mb-4 font-display">
                Diet plans for every stage of childhood
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                From a baby&apos;s first foods to a teenager&apos;s growth spurts, plans are matched to your
                child&apos;s age, growth, appetite and family food habits.
              </p>
            </div>

            <div className="shrink-0 self-start md:self-auto">
              <Link
                href="/contact"
                className="inline-block px-7 py-3.5 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 btn-shine font-display"
              >
                Book for your child
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 6 CHILDHOOD STAGES (EXACT MATCH TO USER IMAGE) ── */}
      <section className="py-16 px-6 lg:px-12 bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto">
          {/* 5 cards on top row, 1 card on second row on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {ageStages.map((stage, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-[#eedfce] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span
                        className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md shadow-2xs ${stage.tagBg}`}
                      >
                        {stage.range}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1b4332] text-lg mb-2 font-display">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Also Helps With Row */}
          <div className="mt-12 pt-8 border-t border-[#eedfce]/70">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold text-gray-900 mr-1 font-display">
                Also helps with:
              </span>
              {helpTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-white text-gray-700 rounded-full text-xs font-medium border border-gray-200/90 shadow-2xs hover:border-[#1b4332]/40 hover:scale-105 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-5">
              Children&apos;s plans are made in coordination with your paediatrician where needed.
            </p>
          </div>

          {/* Child Nutrition & School Tiffin Showcase Card */}
          <div className="mt-14 rounded-3xl overflow-hidden bg-white border border-[#ebdccb] shadow-sm grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto min-h-[260px] w-full group">
              <Image
                src="/images/kids-lunch.jpg"
                alt="Children eating healthy school tiffin"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-semibold text-white px-3 py-1 rounded-full bg-emerald-950/70 backdrop-blur-xs">
                  Wholesome School Tiffins &amp; Snacks
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b45309] mb-2 font-display">
                Pediatric Nutrition Focus
              </span>
              <h3 className="text-2xl font-black text-[#1b4332] mb-3 font-display">
                Building positive food habits for life
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                Eliminate mealtime battles and fussy eating. We design creative, delicious school tiffin ideas and growth-supporting menus tailored to your child&apos;s appetite, texture preferences, and activity level.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 btn-shine font-display"
                >
                  Schedule child nutrition assessment &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
