export function StarRow({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) {
  const rounded = Math.round(rating);
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${rating.toFixed(1)} de 5 estrelas`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={
            i < rounded ? "text-sun-500" : "text-slate-200"
          }
        >
          ★
        </span>
      ))}
    </span>
  );
}
