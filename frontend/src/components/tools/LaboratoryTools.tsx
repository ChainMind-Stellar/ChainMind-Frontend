import {
  ShieldCheck,
  ScanLine,
  Cpu,
  FileSearch,
  Lock,
  Gauge,
} from "lucide-react";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import ToolCard from "./ToolCard";

const tools = [
  {
    title: "Security Scanner",
    description: "Detect vulnerabilities in smart contracts instantly.",
    icon: <ShieldCheck />,
  },
  {
    title: "AI Code Analyzer",
    description: "Deep AI inspection of Solidity logic and structure.",
    icon: <Cpu />,
  },
  {
    title: "Gas Optimizer",
    description: "Find expensive operations and optimize gas usage.",
    icon: <Gauge />,
  },
  {
    title: "Exploit Detector",
    description: "Simulate attack vectors and detect risks.",
    icon: <ScanLine />,
  },
  {
    title: "Access Control Review",
    description: "Check ownership and permission safety.",
    icon: <Lock />,
  },
  {
    title: "Audit History",
    description: "Track previous contract audits and reports.",
    icon: <FileSearch />,
  },
];

export default function LaboratoryTools() {
  return (
    <section id="security">
      <Container>
        <SectionTitle subtitle="LABORATORY" title="AI Security Tools" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
