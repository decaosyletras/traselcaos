import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import UniversePreview from "@/components/home/UniversePreview";
import TimelinePreview from "@/components/home/TimelinePreview";
import FeaturedCharacters from "@/components/home/FeaturedCharacters";

function Divider() {
  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full max-w-15xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Divider />
      <FeaturedBooks />
      <Divider />
      <UniversePreview />
      <Divider />
      <TimelinePreview />
      {/*<Divider />*/}
      {/*<FeaturedCharacters />*/}
    </main>
  );
}