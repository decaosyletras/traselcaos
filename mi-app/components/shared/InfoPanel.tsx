interface InfoItem {
  label: string;
  value: string;
}

interface Props {
  title?: string;
  items: InfoItem[];
}

export default function InfoPanel({
  title,
  items,
}: Props) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-cyan-900/20
        bg-zinc-900
        p-6
      "
    >
      {title && (
        <h2
          className="
            text-xl
            font-bold
            mb-6
          "
        >
          {title}
        </h2>
      )}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
        "
      >
        {items.map((item) => (
          <div
            key={item.label}
            className="
              rounded-xl
              bg-zinc-950
              p-4
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-wider
                text-cyan-400
              "
            >
              {item.label}
            </p>

            <p className="mt-2 text-zinc-200">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}