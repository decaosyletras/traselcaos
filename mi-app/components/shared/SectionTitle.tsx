interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 text-center">

      <h2
        className="
          text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-4
            text-zinc-400
            max-w-2xl
            mx-auto
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}