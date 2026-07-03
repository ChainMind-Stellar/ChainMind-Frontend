import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#ece6ee] bg-[#FDF7FF] py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-[#6B6880]">
            BUILT ON STELLAR • AGENT ID: CM-X882
          </p>

          <div className="flex items-center gap-8">
            <Link href="/">Docs</Link>

            <Link href="/">Terms</Link>

            <Link href="/">Privacy</Link>
          </div>

          <p className="text-sm text-[#6B6880]">
            © 2026 ChainMind AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
