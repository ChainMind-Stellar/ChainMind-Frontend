export default function TerminalLogs() {
  return (
    <div className="flex-1 px-8 py-5 font-mono text-base">
      <p className="mb-4 text-green-500">
        {">"} Initializing ChainMind Core v1.0.4...
      </p>
      <p className="mb-4 text-[#D9D2E8]">
        {">"} Awaiting contract injection...
      </p>
      <p className="mb-4 text-[#D9D2E8]">
        {">"} Ready for Soroban / Solidity parsing.
      </p>
      <div className="mt-6 h-5 w-3 animate-pulse bg-green-500" />
    </div>
  );
}
