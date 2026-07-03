interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-[#ece6ee] bg-white shadow-[0px_4px_20px_rgba(78,67,99,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
