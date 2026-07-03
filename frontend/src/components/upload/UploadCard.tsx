"use client";

import UploadSteps from "./UploadSteps";
import WalletButton from "./WalletButton";
import { Upload } from "lucide-react";

export default function UploadCard() {
  return (
    <div className="rounded-[32px] border-2 border-dashed border-[#E4DDF1] bg-white p-16">
      {/* ICON */}
      <div className="flex justify-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#F2ECF8]">
          <Upload size={54} strokeWidth={2.5} className="text-[#4F378A]" />
        </div>
      </div>

      {/* TITLE */}
      <div className="mt-12 text-center">
        <h2 className="font-heading text-5xl font-bold">
          Upload Smart Contract
        </h2>
        <p className="mt-4 text-2xl text-[#6B6880]">
          Drag and drop your .sol files here or click to browse
        </p>
      </div>

      {/* STEPS */}
      <div className="mt-16">
        <UploadSteps />
      </div>

      {/* BUTTON */}
      <div className="mt-16 flex justify-center">
        <WalletButton />
      </div>
    </div>
  );
}
