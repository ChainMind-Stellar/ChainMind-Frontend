export default function AgentCard() {
  return (
    <div className="border-t border-[#2A2335] px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#4F378A] to-[#AA82FF]" />
        <div>
          <h3 className="text-xl font-semibold text-white">CM-X882 Agent</h3>
          <p className="text-sm text-[#A59ABF]">Protocol Monitor</p>
        </div>
      </div>
    </div>
  );
}
