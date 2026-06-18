import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Community Pools", href: "#features" },
      { label: "Yield Vaults", href: "#stellar" },
      { label: "WhatsApp Bot", href: "#how-it-works" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Developer API", href: "#" },
      { label: "Stellar Network", href: "#" },
      { label: "Help Center", href: "#faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security Audit", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                  <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm.75 4.5v3.75h3.75a.75.75 0 010 1.5h-3.75V15.5a.75.75 0 01-1.5 0v-3.75H5.5a.75.75 0 010-1.5h3.75V6.5a.75.75 0 011.5 0z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-slate-900">Kolo</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Social savings infrastructure for the next billion users. Built on
              the secure and efficient Stellar network.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                  {heading}
                </h4>
                <ul className="space-y-3.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 Kolo Finance. Built with trust on Stellar.
          </p>
          <div className="flex items-center gap-4">
            {/* Globe */}
            <button aria-label="Language" className="text-slate-400 hover:text-slate-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </button>
            {/* Community */}
            <button aria-label="Community" className="text-slate-400 hover:text-slate-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </button>
            {/* Institution */}
            <button aria-label="Stellar" className="text-slate-400 hover:text-slate-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
