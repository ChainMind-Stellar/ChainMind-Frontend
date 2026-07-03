export default function TerminalHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex gap-2">
        <div className="h-4 w-4 rounded-full bg-red-500" />
        <div className="h-4 w-4 rounded-full bg-yellow-400" />
        <div className="h-4 w-4 rounded-full bg-green-500" />
      </div>
      <span className="font-mono text-base text-[#C5B6E5]">agent.logs</span>
    </div>
  );
}
