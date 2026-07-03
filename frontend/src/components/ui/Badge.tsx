interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#E8E1F4] px-4 py-2 text-sm font-medium text-[#4F378A]">
      {children}
    </span>
  );
}
