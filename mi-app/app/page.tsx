import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import UniversePreview from "@/components/home/UniversePreview";
import TimelinePreview from "@/components/home/TimelinePreview";
import FeaturedCharacters from "@/components/home/FeaturedCharacters";

function Divider({ label }: { label?: string }) {
  return (
    <div className="relative w-full flex justify-center pt-12 pb-3 md:pt-24 md:pb-6">
      <div className="w-full max-w-5xl px-8 flex items-center gap-6">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {label && (
          <span className="text-[16px] md:text-xl tracking-[0.3em] text-cyan-500 uppercase whitespace-nowrap">
            {label}
          </span>
        )}

        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section id="saga" className="scroll-mt-20 md:scroll-mt-24">
        <Divider label="LA SAGA" />
        <FeaturedBooks />
      </section>

      <section id="universo" className="scroll-mt-20 md:scroll-mt-24">
        <Divider label="UNIVERSO" />
        <UniversePreview />
      </section>
    </main>
  );
}