interface HeroBadgeProps {
  text: string;
}

export default function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#cbc4d2] bg-[#F3F0FA] px-4 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
      <span className="text-sm font-medium text-[#4F378A]">{text}</span>
    </div>
  );
}
