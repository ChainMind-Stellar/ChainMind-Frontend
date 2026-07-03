import Container from "../layout/Container";
import UploadCard from "./UploadCard";
import Terminal from "./terminal/Terminal";

export default function UploadSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <UploadCard />
          <Terminal />
        </div>
      </Container>
    </section>
  );
}
