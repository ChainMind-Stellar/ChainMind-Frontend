import { Wallet2 } from "lucide-react";

export default function WalletButton() {
  return (
    <button className="flex w-[580px] items-center justify-center gap-4 rounded-2xl bg-[#4F378A] py-7 text-3xl font-semibold text-white shadow-xl transition hover:scale-[1.02]">
      <Wallet2 size={32} />
      Connect Freighter Wallet
    </button>
  );
}
