interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8 text-center">

      <h3
        className="
          text-2xl
          md:text-3xl
          lg:text-4xl
          font-bold
        "
      >
        {title}
      </h3>

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