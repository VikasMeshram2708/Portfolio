import Container from "@/components/Container";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <div>
      <Container className="space-y-8 py-32 lg:py-0">
        <Hero />
        {/* Projects */}
        <Projects />
        {/* CTA */}
        {/* Reach me */}
        {/* Footer */}
      </Container>
    </div>
  );
}

// Reference : https://www.wallofportfolios.in/portfolios/niran-nagasai/
