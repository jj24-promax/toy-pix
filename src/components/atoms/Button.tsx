import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-center font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "min-h-11 rounded-full bg-primary px-5 text-sm text-primary-foreground shadow-float hover:bg-primary-hover active:bg-primary-active active:scale-[0.98]",
        outline:
          "min-h-11 rounded-full border-2 border-primary bg-transparent px-5 text-sm text-primary hover:bg-primary/10 active:scale-[0.98]",
        ghost:
          "min-h-11 rounded-lg px-3 text-sm font-semibold text-foreground-muted hover:text-primary-hover",
        drawer:
          "min-h-12 w-full rounded-xl px-4 py-3 font-display text-lg font-semibold text-slate-800 hover:bg-mint-50 active:bg-mint-50/80",
        drawerCta:
          "min-h-12 w-full rounded-2xl bg-primary px-4 py-3 font-display text-base text-primary-foreground shadow-float hover:bg-primary-hover active:scale-[0.98]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
