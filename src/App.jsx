export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Ironclad Security</span>
        <a href="#cta" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Get Audited
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-purple-600 font-semibold mb-4">Cybersecurity Consulting</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Find the gaps before attackers do</h1>
        <p className="text-lg text-slate-600 mb-10">Penetration testing and security audits for growing companies that can’t afford a breach.</p>
        <a href="#cta" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
          Request a Security Audit
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Penetration Testing</h3>
          <p className="text-slate-600">Real-world attack simulations on your systems.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Compliance Ready</h3>
          <p className="text-slate-600">Reports mapped to SOC 2 and ISO 27001.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Clear Remediation Plans</h3>
          <p className="text-slate-600">Prioritized fixes your team can act on immediately.</p>
        </div>
      </section>

      <section id="cta" className="bg-purple-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Know your risk before it costs you</h2>
        <p className="mb-8 text-purple-100">Reports delivered within five business days.</p>
        <a href="#" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Request a Security Audit
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Ironclad Security. All rights reserved.
      </footer>
    </div>
  )
}
