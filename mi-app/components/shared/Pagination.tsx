interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: Props) {
  return (
    <div
      className="
        flex
        justify-center
        gap-3
        mt-12
      "
    >
      {Array.from({
        length: totalPages,
      }).map((_, index) => (
        <button
          key={index}
          className={`
            w-10
            h-10
            rounded-full
            ${
              currentPage === index + 1
                ? "bg-cyan-500 text-black"
                : "bg-zinc-900"
            }
          `}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}