import Container from "../layout/Container";
import Button from "../ui/Button";

export default function AuditCTA() {
  return (
    <section>
      <Container>
        <div className="rounded-3xl bg-[#4F378A] px-10 py-16 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold">
            Ready to secure your smart contracts?
          </h2>

          <p className="mt-4 text-white/80">
            Run an AI-powered audit in seconds and prevent costly exploits.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              className="bg-white hover:bg-gray-100"
              style={{ color: "#4F378A" }}
            >
              Start Free Audit
            </Button>

            <Button
              variant="primary"
              className="border border-white text-white hover:bg-white/10"
              style={{ backgroundColor: "transparent" }}
            >
              View Documentation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
