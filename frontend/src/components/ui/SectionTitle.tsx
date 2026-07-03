interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="space-y-2 text-center">
      {subtitle && (
        <p className="uppercase tracking-[3px] text-sm text-[#6B6880]">
          {subtitle}
        </p>
      )}

      <h2 className="font-heading text-4xl font-bold">{title}</h2>
    </div>
  );
}
