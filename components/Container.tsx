import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("max-w-5xl mx-auto w-full p-2", className)}>
      {children}
    </section>
  );
}
