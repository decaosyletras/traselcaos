interface Props {
  title: string;

  description: string;

  image?: string;
}

export default function EntityHeader({
  title,
  description,
  image,
}: Props) {
  return (
    <section
      className="
        relative
        overflow-hidden
      "
    >
      {image && (
        <div className="h-[300px] md:h-[450px]">

          <img
            src={image}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              opacity-40
            "
          />

        </div>
      )}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/30
          via-black/60
          to-zinc-950
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          max-w-6xl
          mx-auto
          px-6
          pb-12
        "
      >
        <h1
          className="
            text-4xl
            md:text-6xl
            font-bold
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-4
            text-zinc-300
            max-w-2xl
          "
        >
          {description}
        </p>
      </div>
    </section>
  );
}