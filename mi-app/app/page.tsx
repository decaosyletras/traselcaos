import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import UniversePreview from "@/components/home/UniversePreview";
import TimelinePreview from "@/components/home/TimelinePreview";
import FeaturedCharacters from "@/components/home/FeaturedCharacters";

function Divider({ label }: { label?: string }) {
  return (
    <div className="relative w-full flex justify-center py-10 md:py-16">
      <div className="w-full max-w-6xl px-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {label && (
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-cyan-500 uppercase whitespace-nowrap">
            {label}
          </span>
        )}

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Divider label="LA SAGA" />
      <FeaturedBooks />
      <Divider label="UNIVERSO" />
      <UniversePreview />
      <Divider label="CRONOLOGÍA" />
      <TimelinePreview />
    </main>
  );
}