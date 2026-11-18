"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      num: "1",
      title: "Send an enquiry",
      desc: "Fill in the form below with your goal. I'll get back to you within [RESPONSE TIME].",
    },
    {
      num: "2",
      title: "Consultation",
      desc: "An online or in-clinic session to understand your health, reports and routine.",
    },
    {
      num: "3",
      title: "Your plan & follow-ups",
      desc: "Receive your personalised plan, then check in regularly as we fine-tune it.",
    },
  ];

  const whatIncluded = [
    {
      icon: "📋",
      title: "Detailed Assessment",
      desc: "Evaluation of health history, symptoms, medical reports, lifestyle and daily routine.",
    },
    {
      icon: "🍲",
      title: "Customised Meal Plan",
      desc: "Tailored to Indian home-style food — vegetarian, eggetarian, non-veg, Jain, or vegan.",
    },
    {
      icon: "🔄",
      title: "Regular Follow-ups",
      desc: "Scheduled check-ins to monitor energy, appetite and fine-tune portions as you progress.",
    },
    {
      icon: "💬",
      title: "Support on Call / WhatsApp",
      desc: "Continuous support between sessions for restaurant choices, parties, and quick queries.",
    },
  ];

  const faqs = [
    {
      q: "Do I have to cook separate meals for myself or my child?",
      a: "Never. Plans are built around standard Indian home cooking (rotis, dals, sabzis, rice, idlis, khichdi). We tweak portion balance and timing rather than giving exotic separate recipes.",
    },
    {
      q: "Are consultations conducted online or in person?",
      a: "Both! Online video consultations are conducted over Zoom / Google Meet for clients across India and abroad. In-clinic consultations are also available.",
    },
    {
      q: "Are blood tests required before the first session?",
      a: "If you have recent tests (last 3–6 months for CBC, thyroid, lipid profile, HbA1c), please share them. If not, we will review during the first session and advise if any are needed.",
    },
    {
      q: "How are children's meal plans handled?",
      a: "For children, we focus heavily on sensory acceptance, sneaky vegetable integration, and habit building without anxiety. Where needed, we coordinate directly with your pediatrician.",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-white">
      <Navbar />

      {/* Ambient background glows for glassmorphism */}
      <div className="absolute top-28 left-8 w-96 h-96 rounded-full glow-orb-green animate-pulse-glow -z-10" />
      <div className="absolute top-[650px] right-8 w-96 h-96 rounded-full glow-orb-teal -z-10" />

      {/* ── TOP SECTION (EXACT MATCH TO USER'S UPLOADED IMAGE) ── */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Subtitle & Main Title */}
          <div className="mb-14">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#1b4332] mb-3 font-display">
              HOW IT WORKS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#1b4332] tracking-tight leading-[1.12] font-display">
              Three simple steps
            </h1>
          </div>

          {/* 3 Horizontal Columns matching user screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-start group">
                {/* Solid green circle number */}
                <div className="w-12 h-12 rounded-full bg-[#1b4332] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-xs group-hover:scale-105 transition-transform duration-200">
                  {s.num}
                </div>
                <h3 className="font-bold text-[#1b4332] text-xl lg:text-2xl mb-3 font-display">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-[15px] leading-relaxed max-w-sm font-normal">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Consultation Visual Showcase */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 items-center rounded-3xl bg-[#faf6ef] border border-[#ebdccb]/80 p-6 md:p-8">
            <div className="relative h-60 md:h-72 w-full rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src="/images/consultation.jpg"
                alt="One-on-one nutrition consultation session"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-emerald-950/70 backdrop-blur-xs">
                  Online Video &amp; In-Clinic Sessions
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 glass-pill px-3 py-1 rounded-full">
                Step-by-Step Guidance
              </span>
              <h3 className="text-2xl font-bold text-[#1b4332] font-display">
                Personalized care from enquiry to long-term success
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether assessing blood reports, accommodating dietary restrictions, or creating kid-friendly tiffin schedules, every stage of your nutrition journey is supported with proactive check-ins.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#1b4332]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Quick response within 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Continuous WhatsApp support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM SECTION (As indicated by "form below with your goal") ── */}
      <section className="pb-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#e3ede6]/80 backdrop-blur-xl border border-[#d2e2d6] shadow-sm relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1b4332] glass-pill px-3.5 py-1 rounded-full mb-2 font-display">
                Step 1 · Send An Enquiry
              </span>
              <h2 className="text-3xl font-extrabold text-[#1b4332] font-display">
                Tell me about your health goal
              </h2>
              <p className="text-gray-700 text-sm mt-1">
                Fill in the form below and I&apos;ll get back to you within 24 hours to schedule your consultation.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/90 backdrop-blur-md text-center max-w-md mx-auto shadow-sm animate-fade-in-up">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl mx-auto mb-3">
                  ✓
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-1 font-display">Enquiry Sent!</h3>
                <p className="text-xs text-gray-600 mb-4">
                  Thank you! I will review your requirements and reach you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-[#1b4332] text-white text-xs font-semibold"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 font-display">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/90 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 font-display">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/90 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 font-display">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/90 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 font-display">
                    Main Goal *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/90 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm"
                  >
                    <option value="">Select your goal</option>
                    <option>Weight loss / weight gain</option>
                    <option>Childhood / Teen nutrition</option>
                    <option>Picky eating / School tiffin ideas</option>
                    <option>PCOS & women&apos;s health</option>
                    <option>Diabetes, thyroid &amp; BP</option>
                    <option>Sports &amp; athletic fitness</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 font-display">
                    Anything I should know?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Health conditions, food allergies, dietary preferences (veg / non-veg / Jain)..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/90 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 btn-shine font-display"
                  >
                    Send enquiry now &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── WHAT EVERY PLAN INCLUDES ── */}
      <section className="py-16 px-6 lg:px-12 bg-[#faf6ef]/70 border-t border-[#ebdccb]/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1b4332] glass-pill px-3.5 py-1 rounded-full mb-2 font-display">
              Transparent Care
            </span>
            <h2 className="text-3xl font-extrabold text-[#1b4332] font-display">
              What every plan includes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIncluded.map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1b4332] flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#1b4332] text-base mb-2 font-display">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-16 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1b4332] glass-pill px-3.5 py-1 rounded-full mb-2 font-display">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-[#1b4332] font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-3xl bg-[#faf6ef]/70 border border-[#eedfce] shadow-2xs"
              >
                <h4 className="font-bold text-[#1b4332] text-base mb-2 font-display">
                  Q: {faq.q}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
