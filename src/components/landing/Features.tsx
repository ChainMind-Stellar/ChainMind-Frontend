export default function Features() {
  return (
    <section id="features" className="bg-[#f9f8f7] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Engineered for Transparency
          </h2>
          <p className="text-slate-500 text-lg">The future of social finance, simplified.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Community Pools */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-slate-900 text-xl mb-3">Community Pools</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Launch a private saving circle with friends, family, or your local business community.
              Automate contributions and payouts without the manual headache.
            </p>
            <div className="mt-auto bg-slate-50 rounded-2xl p-4">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs font-medium text-slate-700">Education Fund</span>
                <span className="text-xs font-semibold text-emerald-600">65% Complete</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: "65%" }} />
              </div>
            </div>
          </div>

          {/* WhatsApp Native */}
          <div className="bg-emerald-800 rounded-3xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-emerald-700/50 -translate-y-1/3 translate-x-1/3" aria-hidden="true" />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-emerald-700 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.997 2C6.48 2 2 6.48 2 12c0 1.76.46 3.41 1.27 4.84L2 22l5.26-1.38A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 11.997 2z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white text-xl mb-3">WhatsApp Native</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">
                No new apps to download. Manage your entire vault through a secure,
                encrypted WhatsApp chat.
              </p>
            </div>
            {/* Mini chat preview */}
            <div className="relative z-10 mt-8 space-y-2.5">
              {[
                { from: "bot", text: "Your pool has been funded ✓" },
                { from: "user", text: "Send $50 to Education Fund" },
                { from: "bot", text: "Payment confirmed in 3s 🚀" },
              ].map(({ from, text }, i) => (
                <div key={i} className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`text-[11px] px-3 py-1.5 rounded-xl max-w-[75%] ${from === "user" ? "bg-emerald-500 text-white rounded-tr-sm" : "bg-emerald-900/70 text-emerald-100 rounded-tl-sm"}`}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Military-Grade */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col">
            <div className="w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-slate-900 text-xl mb-3">Military-Grade</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every transaction is anchored to the Stellar network, providing immutable
              proof of your savings. Your funds, your keys, your control.
            </p>
          </div>

          {/* Real-time Yields */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col relative overflow-hidden">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-slate-900 text-xl mb-3">Real-time Yields</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {"Don't just save—earn. Your pool's idle capital is put to work in low-risk liquidity pools, returning value to the group members."}
            </p>
            <a href="#stellar" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              Learn about Yields
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
