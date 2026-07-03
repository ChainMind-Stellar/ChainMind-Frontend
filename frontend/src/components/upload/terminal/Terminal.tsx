import AgentCard from "./AgentCard";
import TerminalHeader from "./TerminalHeader";
import TerminalLogs from "./TerminalLogs";

export default function Terminal() {
  return (
    <div className="flex flex-col rounded-[32px] border border-[#2A2335] bg-[#0F0C15]">
      <TerminalHeader />
      <TerminalLogs />
      <AgentCard />
    </div>
  );
}
