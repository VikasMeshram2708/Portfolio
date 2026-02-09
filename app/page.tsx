import Container from "@/components/Container";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div>
      <Container className="py-32">
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </Container>
    </div>
  );
}
