type Props = {
  txt: string;
  color?: "accent" | "mint" | "pink";
};

export const Badge = ({ txt, color = "accent" }: Props) => (
  <span
    className={`inline-block px-2 py-1 text-[0.68rem] font-bold rounded-full ${
      color === "accent"
        ? "bg-sun-400 text-slate-900"
        : color === "mint"
          ? "bg-mint-100 text-mint-700"
          : "bg-bubblegum-400 text-white"
    }`}
  >
    {txt}
  </span>
);
