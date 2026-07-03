import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-7xl px-6 lg:px-8">{children}</div>
    </div>
  );
}
