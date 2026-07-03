import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";
import UploadSection from "@/components/upload/UploadSection";
import LaboratoryTools from "@/components/tools/LaboratoryTools";
import AuditCTA from "@/components/cta/AuditCTA";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex w-full flex-col gap-24">
        <Hero />

        <UploadSection />

        <FadeIn delay={0.2}>
          <LaboratoryTools />
        </FadeIn>

        <FadeIn delay={0.3}>
          <AuditCTA />
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}
