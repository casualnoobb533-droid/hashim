import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function About() {
  const aboutRef = useRevealOnScroll();

  return (
    <section id="about" className="py-20 reveal" ref={aboutRef}>
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-2xl mx-auto">
        I build and optimize high-traffic server
        environments, with a primary focus on Minecraft server architecture and custom
      </p>
    </section>
  );
}
