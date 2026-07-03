import { BrainCircuit } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F378A] text-white">
        <BrainCircuit size={18} />
      </div>

      <span className="font-heading text-2xl font-bold text-[#4F378A]">
        ChainMind
      </span>
    </div>
  );
}
