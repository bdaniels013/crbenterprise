import React from "react";

// CRB Enterprise 1:1 Call Landing Page Skeleton
// TailwindCSS-based layout with clear areas for:
// - CRB logo
// - Chuck hero photo
// - Stripe-gated "Book 1:1 Call" CTA
// - About, Outcomes, Social Proof, FAQs

export default function CRBLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo placeholder */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs tracking-tight">
            LOGO
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm uppercase tracking-[0.25em] text-slate-400">
              CRB ENTERPRISE
            </span>
            <span className="text-xs text-slate-500">Advisory • Strategy • Growth</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <button className="hover:text-white transition">About</button>
          <button className="hover:text-white transition">What You Get</button>
          <button className="hover:text-white transition">Testimonials</button>
          <button className="hover:text-white transition">FAQs</button>
          <button className="px-4 py-2 rounded-full border border-cyan-400/70 text-cyan-300 text-xs hover:bg-cyan-400 hover:text-slate-950 transition font-semibold">
            Book 1:1 Call
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] gap-10 md:gap-14 items-center mt-4 md:mt-10">
          {/* Left: Copy & CTA */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              1:1 Private Strategy Session with Chuck
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
              Get unfiltered, <span className="text-cyan-400">senior-level strategy</span> on your toughest business decisions.
            </h1>

            <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6">
              A focused one-on-one call with Chuck where you can pressure-test ideas, unpack roadblocks, and leave with a clear, prioritized action plan tailored to your business.
            </p>

            {/* Value bullets */}
            <div className="grid sm:grid-cols-3 gap-3 text-[11px] text-slate-300 mb-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                <p className="font-semibold text-slate-100 mb-1">Deep Dive, No Fluff</p>
                <p>Bring your real numbers and real challenges. This isn&apos;t theory—this is execution.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                <p className="font-semibold text-slate-100 mb-1">Operator-Level Perspective</p>
                <p>Guidance from someone who&apos;s been in the trenches building and scaling companies.</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                <p className="font-semibold text-slate-100 mb-1">Immediate Next Steps</p>
                <p>Walk away with 3–5 concrete moves to make in the next 30 days.</p>
              </div>
            </div>

            {/* Pricing + CTA Card */}
            <div className="rounded-2xl border border-cyan-500/40 bg-slate-900/80 shadow-[0_0_80px_rgba(56,189,248,0.2)] p-4 sm:p-5 max-w-md">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">1:1 Strategy Call</p>
                  <p className="text-lg font-semibold text-slate-50">Book a private session with Chuck</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Investment</p>
                  <p className="text-2xl font-semibold text-cyan-300 leading-none">$100</p>
                  <p className="text-[11px] text-slate-400 mt-1">One-time, fully applied to future work*</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 mb-4">
                This is not an extra fee. Your full $100 is applied to whichever package you choose. Example: If you select the $375 package, you only pay $275 afterward.
              </p>

              <button className="w-full rounded-full bg-cyan-400 text-slate-950 text-xs font-semibold py-3 flex items-center justify-center gap-2 hover:bg-cyan-300 active:bg-cyan-500 transition">
                <span>Pay $100 &amp; Schedule Your Call</span>
              </button>

              <p className="mt-3 text-[10px] text-slate-500">
                *Optional note: If you proceed into a larger engagement, this call fee can be credited toward your first invoice.
              </p>
            </div>
          </div>

          {/* Right: Chuck Photo & Credentials */}
          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent rounded-[2rem] blur-2xl" />

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-4 md:p-5 flex flex-col gap-4">
              {/* Photo placeholder */}
              <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                <span className="text-xs text-slate-400">
                  Chuck&apos;s Portrait (drop photo here)
                </span>
              </div>

              {/* Name + title */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-50">Chuck [Last Name]</p>
                  <p className="text-[11px] text-slate-400">Founder, CRB Enterprise</p>
                </div>
                <div className="text-right text-[10px] text-slate-400">
                  <p>Advisor • Operator • Strategist</p>
                  <p>Specializing in [core niches]</p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-lg font-semibold text-slate-50 mb-1">10+ yrs</p>
                  <p>Leading teams and scaling companies</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-lg font-semibold text-slate-50 mb-1">$XM+</p>
                  <p>Revenue influenced / managed</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-lg font-semibold text-slate-50 mb-1">100s</p>
                  <p>Leaders advised 1:1</p>
                </div>
              </div>

              {/* Quote */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 md:p-4 text-[11px] text-slate-300">
                <p className="mb-2">“Short positioning quote from Chuck that speaks directly to the type of founder/operator he loves to help.”</p>
                <p className="text-[10px] text-slate-500">— Chuck [Last Name], CRB Enterprise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof & outcome-focused sections, FAQ, etc. can be added below as needed. */}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span>© {new Date().getFullYear()} CRB Enterprise. All rights reserved.</span>
            <span className="text-[10px]">This call does not constitute legal, financial, or tax advice. Please consult appropriate licensed professionals for those matters.</span>
          </div>
          <div className="flex gap-4">
            <button className="hover:text-slate-300">Terms</button>
            <button className="hover:text-slate-300">Privacy</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
