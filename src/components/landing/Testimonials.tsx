const testimonials = [
  {
    quote:
      "Kolo transformed how our marketplace chama operates. No more tracking cash or paper ledgers. It's all on WhatsApp!",
    name: "Sarah M.",
    role: "Nairobi Market Lead",
    initials: "SM",
    color: "bg-rose-100 text-rose-700",
  },
  {
    quote:
      "The transparency of the Stellar ledger gives my family peace of mind. We know exactly where our savings are at any time.",
    name: "David O.",
    role: "Family Savings Pool",
    initials: "DO",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "Setup took less than 2 minutes. Now I just message the bot every Friday to save my earnings. Highly recommended!",
    name: "James T.",
    role: "Freelancer Pool",
    initials: "JT",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#f9f8f7] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-emerald-600 mb-2 uppercase tracking-wider">
            Trusted by Communities
          </p>
          <p className="text-slate-500 text-lg">Real stories from real savers.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="bg-white rounded-3xl p-8 shadow-sm"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-700 text-sm leading-relaxed italic mb-8">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-xs font-bold shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-semibold">{name}</p>
                  <p className="text-slate-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
