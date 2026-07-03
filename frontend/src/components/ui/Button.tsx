import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-6 py-3 font-medium transition-all duration-200 active:scale-95",

        variant === "primary" && "bg-[#4F378A] text-white hover:bg-[#433955]",

        variant === "outline" &&
          "border border-[#cbc4d2] bg-white hover:bg-[#f4f1ec]",

        className,
      )}
    >
      {children}
    </button>
  );
}
