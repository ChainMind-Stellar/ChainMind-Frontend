const steps = ["Paying", "Parsing", "Analyzing", "Simulating", "Recording"];

export default function UploadSteps() {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold ${
                index === 0
                  ? "bg-[#4F378A] text-white"
                  : "bg-[#F4F1F6] text-[#888]"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`mt-4 text-lg ${
                index === 0 ? "text-[#4F378A]" : "text-[#888]"
              }`}
            >
              {step}
            </span>
          </div>

          {index !== steps.length - 1 && (
            <div className="mx-6 h-[2px] w-16 bg-[#ECE6F2]" />
          )}
        </div>
      ))}
    </div>
  );
}
