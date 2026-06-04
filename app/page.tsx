export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Monitor API Breaking Changes
          <span className="block text-[#58a6ff]">Before They Break Your Clients</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Automatically track OpenAPI spec changes across versions. Get instant webhook and email alerts the moment a breaking modification is detected — so your integrations never go dark.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Monitoring — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Spec Diffing", desc: "Deep comparison of OpenAPI specs to surface removed endpoints, changed types, and broken contracts." },
            { icon: "🚨", title: "Instant Alerts", desc: "Webhook and email notifications the moment a breaking change is detected in any monitored API." },
            { icon: "📊", title: "Diff Dashboard", desc: "Visual history of every spec change with severity ratings and affected client impact analysis." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 20 monitored API specs",
              "Polling every 15 minutes",
              "Webhook + email alerts",
              "Full diff history & dashboard",
              "Breaking change severity scoring",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What counts as a breaking change?",
              a: "Removed endpoints, renamed required fields, changed parameter types, stricter validation rules, and removed enum values — anything that would cause existing client code to fail."
            },
            {
              q: "How does it fetch my API specs?",
              a: "You provide a URL to your OpenAPI spec (JSON or YAML). Our background job fetches it on your chosen schedule, compares it to the previous version, and flags any breaking differences."
            },
            {
              q: "Can I get alerts in Slack or PagerDuty?",
              a: "Yes. The webhook alert system lets you point notifications at any endpoint — Slack incoming webhooks, PagerDuty event API, or your own internal systems."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        © {new Date().getFullYear()} API Contract Diff Monitor. All rights reserved.
      </footer>
    </main>
  );
}
