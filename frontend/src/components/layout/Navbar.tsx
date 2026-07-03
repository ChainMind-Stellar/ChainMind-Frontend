"use client";

import Link from "next/link";
import Button from "../ui/Button";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks } from "@/constants/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ece6ee] bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-medium text-[#494551] transition hover:text-[#4F378A]"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button>Connect Wallet</Button>
          </div>

          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </Container>
    </header>
  );
}
