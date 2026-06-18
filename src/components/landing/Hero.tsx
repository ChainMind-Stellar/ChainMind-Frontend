import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-16 pb-8">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              WhatsApp · Stellar Savings
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
              Save Together.<br />Grow Together.
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Kolo brings the power of community savings (Chamas) to your WhatsApp.
              Secure, transparent, and built on the Stellar blockchain.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-sm shadow-emerald-200"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.997 2C6.48 2 2 6.48 2 12c0 1.76.46 3.41 1.27 4.84L2 22l5.26-1.38A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 11.997 2z" />
                </svg>
                Join on WhatsApp
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-700 font-semibold text-sm transition-colors"
              >
                Explore Pools
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end items-end pb-0">
            <div className="relative">
              {/* Phone shell */}
              <div className="relative w-60 sm:w-72 bg-slate-900 rounded-[3rem] shadow-2xl border-[5px] border-slate-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-slate-900 px-5 pt-8 pb-2 flex justify-between items-center">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      </svg>
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="7" width="20" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M22 11v3" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* WhatsApp-style header */}
                  <div className="bg-emerald-700 px-4 py-2.5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold font-display">K</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-semibold">Kolo Savings Bot</div>
                      <div className="text-emerald-200 text-[10px]">online</div>
                    </div>
                    <svg className="w-4 h-4 text-emerald-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                    </svg>
                  </div>

                  {/* Chat */}
                  <div className="bg-[#0d2b1e] px-3 py-4 space-y-3 min-h-[260px]">
                    <div className="flex justify-start">
                      <div className="bg-emerald-900 text-white text-[11px] rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
                        <p className="font-medium text-emerald-300 text-[10px] mb-0.5">GROUP NAME</p>
                        <p>Market Women Circle</p>
                        <p className="text-emerald-400 text-[10px] mt-0.5">GBKX…4F2T</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-emerald-600 text-white text-[11px] rounded-xl rounded-tr-sm px-3 py-2 max-w-[75%] shadow-sm">
                        <p>Monthly contribution: $50</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-emerald-900 text-white text-[11px] rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                        <p className="text-emerald-400 text-[10px] font-medium mb-1.5">NEXT PAYOUT</p>
                        <p className="text-lg font-bold font-display">$450.00</p>
                        <div className="mt-2 h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full" style={{ width: "65%" }} />
                        </div>
                        <p className="text-[10px] text-emerald-400 mt-1">65% funded · 3 members</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-emerald-600 text-white text-[11px] rounded-xl rounded-tr-sm px-3 py-2 shadow-sm">
                        <p>✓ Contribution confirmed</p>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#0d2b1e] px-3 pb-4 flex items-center gap-2">
                    <div className="flex-1 bg-emerald-900/50 rounded-full px-4 py-2">
                      <span className="text-emerald-500 text-xs">Message</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gold sphere */}
              <div
                className="absolute -right-8 bottom-20 w-28 h-28 rounded-full hidden lg:block"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 45%, #b45309 80%, #78350f)",
                  boxShadow: "0 20px 60px rgba(245,158,11,0.35)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
