"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    goal: "",
    age: "",
    dietaryPreference: "Vegetarian",
    healthHistory: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone / WhatsApp number is required.";
    } else if (!/^[0-9+\s()-]{7,20}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.goal.trim()) {
      errors.goal = "Please select your primary consultation goal.";
    }
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit consultation request.");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        goal: "",
        age: "",
        dietaryPreference: "Vegetarian",
        healthHistory: "",
      });
    } catch (err: any) {
      console.error("Submission failed:", err);
      setErrorMessage(
        err.message ||
          "There was a problem submitting your request. Please check your network or try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Ambient background glowing orbs */}
      <div className="absolute top-28 left-8 w-96 h-96 rounded-full glow-orb-green animate-pulse-soft -z-10" />
      <div className="absolute top-[600px] right-8 w-96 h-96 rounded-full glow-orb-amber -z-10" />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1b4332] glass-pill px-4 py-1.5 rounded-full mb-4">
            Certified Clinical Dietitian &amp; Pediatric Nutritionist
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4 font-display">
            Start Your Diet Plan
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Tell me a little about yourself and your goal. I&apos;ll reply to schedule your first consultation.
          </p>
        </div>
      </section>

      {/* Direct Contact Info Glass Bar */}
      <section className="pb-12 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 md:p-8 rounded-3xl glass-card grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">📞</span>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-display">Phone / WhatsApp</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">+91 [YOUR PHONE]</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">✉️</span>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-display">Email Address</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">rksaklani90@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">📍</span>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-display">Clinic Location</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">[CLINIC ADDRESS] · Online available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION BOOKING GLASS FORM */}
      <section id="book" className="py-8 pb-20 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl glass-card shadow-lg relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-xs">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                  Consultation Request Submitted!
                </h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto mb-2 leading-relaxed">
                  Thank you! An automated email notification has been dispatched to{" "}
                  <strong className="text-emerald-900">rksaklani90@gmail.com</strong>.
                </p>
                <p className="text-xs text-gray-500 mb-6">
                  We will review your requirements and reach you on WhatsApp or Phone within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#1b4332] text-white text-xs font-bold hover:bg-[#143427] transition-all shadow-md btn-shine"
                >
                  Book another consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {errorMessage && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-fade-in-up">
                    <span className="text-base shrink-0 leading-none">⚠️</span>
                    <div>
                      <p className="font-bold">Submission Failed</p>
                      <p className="mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-display">
                      Full Name *
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4332] ${
                        fieldErrors.fullName
                          ? "border-rose-400 bg-rose-50/40"
                          : "border-gray-200"
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p className="text-rose-600 text-xs mt-1.5 font-medium">
                        {fieldErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-display">
                      Phone / WhatsApp *
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4332] ${
                        fieldErrors.phone
                          ? "border-rose-400 bg-rose-50/40"
                          : "border-gray-200"
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-rose-600 text-xs mt-1.5 font-medium">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-display">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="priya@example.com"
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4332] ${
                        fieldErrors.email
                          ? "border-rose-400 bg-rose-50/40"
                          : "border-gray-200"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-rose-600 text-xs mt-1.5 font-medium">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-display">
                      Primary Consultation Goal *
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-white/80 backdrop-blur-md border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1b4332] ${
                        fieldErrors.goal
                          ? "border-rose-400 bg-rose-50/40"
                          : "border-gray-200"
                      }`}
                    >
                      <option value="">Select Primary Goal</option>
                      <option value="Child Growth & School Tiffin Plan">
                        Child Growth &amp; School Tiffin Plan
                      </option>
                      <option value="Picky Eater / Appetite Support">
                        Picky Eater / Appetite Support
                      </option>
                      <option value="Teen Sports & Muscle Fuel">
                        Teen Sports &amp; Muscle Fuel
                      </option>
                      <option value="PCOS / Hormonal Balance">
                        PCOS / Hormonal Balance
                      </option>
                      <option value="Weight Loss / Healthy Weight Gain">
                        Weight Loss / Healthy Weight Gain
                      </option>
                      <option value="Diabetes / Thyroid / Blood Pressure">
                        Diabetes / Thyroid / Blood Pressure
                      </option>
                      <option value="General Family Nutrition">
                        General Family Nutrition
                      </option>
                    </select>
                    {fieldErrors.goal && (
                      <p className="text-rose-600 text-xs mt-1.5 font-medium">
                        {fieldErrors.goal}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-display">
                      Age (Self or Child)
                    </label>
                    <input
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. 8 years (Child) or 34 (Self)"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-display">
                      Dietary Preference
                    </label>
                    <select
                      name="dietaryPreference"
                      value={formData.dietaryPreference}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm transition-all"
                    >
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian (Eggs / Chicken / Fish)">
                        Non-Vegetarian (Eggs / Chicken / Fish)
                      </option>
                      <option value="Eggetarian">Eggetarian</option>
                      <option value="Jain Vegetarian">Jain Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-display">
                    Health History or Questions
                  </label>
                  <textarea
                    name="healthHistory"
                    value={formData.healthHistory}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe allergies, food likes/dislikes, ongoing health conditions, or key goals..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b4332] text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#1b4332] hover:bg-[#143427] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 btn-shine font-display"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      <span>Submitting Consultation Request...</span>
                    </>
                  ) : (
                    <span>Request a consultation &rarr;</span>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">
                  🔒 Your details are kept private and used only to contact you about your consultation.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
