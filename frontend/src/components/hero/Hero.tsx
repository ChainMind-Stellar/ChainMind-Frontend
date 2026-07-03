import Button from "../ui/Button";
import Container from "../layout/Container";
import HeroBadge from "./HeroBadge";
import PriceBadge from "./PriceBadge";

export default function Hero() {
  return (
    <section className="pt-20" id="hero">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <HeroBadge text="AI Auditor Online" />

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#1d1b20] lg:text-7xl">
              AI-powered
              <br />
              Smart Contract
              <br />
              Audits
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6B6880]">
              Upload your Solidity contract and receive an AI-generated security
              report in minutes. Built for developers on Stellar.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>Start Audit</Button>

              <Button variant="outline">See Example Report</Button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">
            <PriceBadge />
          </div>
        </div>
      </Container>
    </section>
  );
}
