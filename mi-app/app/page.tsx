import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import UniversePreview from "@/components/home/UniversePreview";
import TimelinePreview from "@/components/home/TimelinePreview";
import FeaturedCharacters from "@/components/home/FeaturedCharacters";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <FeaturedBooks />

      <UniversePreview />

      <TimelinePreview />

      <FeaturedCharacters />
    </main>
  );
}