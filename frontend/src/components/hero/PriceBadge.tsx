export default function PriceBadge() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0px_4px_20px_rgba(78,67,99,0.08)] border border-[#ece6ee] w-full max-w-sm">
      <p className="text-sm text-[#6B6880] mb-2">Audit Cost</p>

      <div className="flex items-end gap-2">
        <h2 className="text-5xl font-bold text-[#4F378A]">$0.10</h2>

        <span className="pb-2 text-[#6B6880]">USDC</span>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span>Analysis</span>
          <span>✔</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Security Scan</span>
          <span>✔</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Risk Report</span>
          <span>✔</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Download PDF</span>
          <span>✔</span>
        </div>
      </div>
    </div>
  );
}
