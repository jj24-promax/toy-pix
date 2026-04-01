const items = [
  {
    label: "Pix instantâneo",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    ),
  },
  {
    label: "Voucher na hora",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M4 4h16v4l-2 2 2 2v4H4v-4l2-2-2-2V4z" />
        <path d="M12 11h.01" />
      </svg>
    ),
  },
  {
    label: "Loja verificada",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export const HeroTrustStrip = () => (
  <ul className="mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2 px-2 sm:gap-3">
    {items.map((item) => (
      <li
        key={item.label}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm"
      >
        {item.icon}
        <span>{item.label}</span>
      </li>
    ))}
  </ul>
);
