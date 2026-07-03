import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ToolCard({ title, description, icon }: Props) {
  return (
    <div className="rounded-2xl border border-[#ece6ee] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-[#E8E1F4] p-3 text-[#4F378A]">{icon}</div>

        <h3 className="font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-[#6B6880]">{description}</p>
    </div>
  );
}
