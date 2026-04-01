import type { LandingBenefit } from "@/data/landing";

type IconName = LandingBenefit["icon"];

export function LPBenefitIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const common = { className, viewBox: "0 0 24 24", "aria-hidden": true as const };
  switch (name) {
    case "play":
      return (
        <svg {...common} fill="currentColor">
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.12-2.69 7.95-6 8.91-3.31-.96-6-4.79-6-8.91V6.43l6-2.25z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2l1.35 5.36L19 9l-5.65 1.64L12 16l-1.35-5.36L5 9l5.65-1.64L12 2z" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20 6h-2.18A3 3 0 0017 3h-4a3 3 0 00-6 0H5a3 3 0 00-1 5.82V19a2 2 0 002 2h14a2 2 0 002-2V8.82A3.001 3.001 0 0020 6zM9 4a1 1 0 011-1h1v2H9V4zm4-1a1 1 0 011 1v1h-2V3h1zm6 15H5v-9h14v9z" />
        </svg>
      );
    default:
      return null;
  }
}
