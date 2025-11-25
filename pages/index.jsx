import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  async function startCheckout() {
    try {
      setLoading(true);
      const res = await fetch("/api/create-checkout-session", { method: "POST" });
      const data = await res.json();
      if (data && data.url) window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img src="/crb-enterprise-logo.png" alt="CRB Enterprise" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="font-semibold text-sm uppercase tracking-[0.25em]">CRB Enterprise</p>
            <p className="text-xs">Advisory • Strategy • Growth</p>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] gap-10 md:gap-16 items-start mt-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-crbGreen/25 px-3 py-1 text-[11px] uppercase tracking-[0.2em] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-crbGold" />
              1:1 Private Call With Chuck
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-medium mb-6">
              You’re ready. This is how you get Chuck on your calendar.
            </h1>

            <p className="text-[15px] max-w-xl mb-8">
              Book a focused strategy call and get your full $100 credit applied to whichever package you choose.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[12px] mb-10">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-crbGold" />Clear decisions in 60 minutes</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-crbGold" />Operator-level perspective</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-crbGold" />Action steps for the next 30 days</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-crbGold" />Credit applies to your package</li>
            </ul>

            <div className="rounded-xl border border-crbGreen/25 bg-white p-5 max-w-md shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] mb-2">1:1 Strategy Call – $100 Commitment Credit</p>
              <p className="text-[12px] mb-5">Your $100 isn’t an extra fee—it applies to your package. Example: If you choose a $375 package, you pay $275 after this call.</p>
              <button onClick={startCheckout} disabled={loading} className="w-full rounded-full bg-crbGold text-crbGreen text-xs font-semibold py-3 hover:brightness-110 active:brightness-95 transition">
                {loading ? "Processing…" : "Pay $100 & Schedule Your Call"}
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-crbGreen/25 bg-white p-4 md:p-5 shadow-sm">
              <div className="grid grid-cols-2 gap-3">
                <img src="/chuck-standing.jpg" alt="Chuck standing" className="w-full h-64 md:h-72 object-cover rounded-2xl border border-crbGreen/25" />
                <img src="/chuck-sitting.jpg" alt="Chuck sitting" className="w-full h-64 md:h-72 object-cover rounded-2xl border border-crbGreen/25" />
              </div>
              <div className="flex items-center justify-between gap-3 mt-4">
                <div>
                  <p className="text-sm font-semibold">Chuck</p>
                  <p className="text-[12px]">Founder, CRB Enterprise</p>
                </div>
                <div className="text-right text-[12px]">Advisor • Operator • Strategist</div>
              </div>
              <p className="text-[12px] mt-2">Chuck works with founders and operators to make decisive moves, prioritize what matters, and cut through noise.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl mb-4">How the Call Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-crbGreen/25 bg-white p-4">
              <div className="flex items-center gap-2 mb-2"><span className="h-6 w-6 rounded-full bg-crbGold text-crbGreen flex items-center justify-center text-xs font-semibold">1</span><span className="text-sm font-semibold">Pay your $100 commitment credit</span></div>
              <p className="text-[12px]">Secure your spot with a refundable-to-package payment.</p>
            </div>
            <div className="rounded-xl border border-crbGreen/25 bg-white p-4">
              <div className="flex items-center gap-2 mb-2"><span className="h-6 w-6 rounded-full bg-crbGold text-crbGreen flex items-center justify-center text-xs font-semibold">2</span><span className="text-sm font-semibold">Get instant access to Chuck’s calendar</span></div>
              <p className="text-[12px]">Choose a time that works and lock it in.</p>
            </div>
            <div className="rounded-xl border border-crbGreen/25 bg-white p-4">
              <div className="flex items-center gap-2 mb-2"><span className="h-6 w-6 rounded-full bg-crbGold text-crbGreen flex items-center justify-center text-xs font-semibold">3</span><span className="text-sm font-semibold">Have the call & apply your credit</span></div>
              <p className="text-[12px]">Move forward with clarity and apply the $100 to your package.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl mb-2">Who You’re Getting On the Line</h2>
          <p className="text-[13px] max-w-3xl">Chuck brings operator-grade perspective to founders ready to execute. Expect direct, actionable guidance focused on decisions, priorities, and momentum.</p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl mb-4">FAQ</h2>
          <div className="space-y-4 max-w-3xl">
            <div className="rounded-xl border border-crbGreen/25 bg-white p-4"><p className="text-sm font-semibold mb-1">Is the $100 extra?</p><p className="text-[12px]">No. It applies to your package.</p></div>
            <div className="rounded-xl border border-crbGreen/25 bg-white p-4"><p className="text-sm font-semibold mb-1">What if I don’t move forward?</p><p className="text-[12px]">You still get a full strategy call.</p></div>
            <div className="rounded-xl border border-crbGreen/25 bg-white p-4"><p className="text-sm font-semibold mb-1">How long is the call?</p><p className="text-[12px]">Typically 60 minutes.</p></div>
            <div className="rounded-xl border border-crbGreen/25 bg-white p-4"><p className="text-sm font-semibold mb-1">Rescheduling policy</p><p className="text-[12px]">Please provide 24 hours’ notice.</p></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-crbGreen/25 py-6 text-[12px]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2"><div className="h-8 w-8 rounded-full border border-crbGreen/25 flex items-center justify-center text-[10px] font-semibold">CRB</div><span>© {new Date().getFullYear()} CRB Enterprise</span></div>
          <div className="text-[11px] max-w-3xl">This call does not constitute legal, financial, or tax advice. Consult licensed professionals for those matters.</div>
        </div>
      </footer>
    </div>
  );
}
