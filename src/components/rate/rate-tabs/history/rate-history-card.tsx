import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function RateHistoryCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "space-y-4 rounded-[1rem] border border-neutral-600 bg-neutral-700 px-5 py-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function RateHistoryCardTitle({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-preset-4 text-neutral-50/70 uppercase", className)}
      {...props}
    >
      {children}
    </p>
  );
}

type CardValueVariant = "default" | "positive" | "negative";

function RateHistoryCardValue({
  value,
  variant = "default",
  className,
}: {
  value: string | number;
  variant?: CardValueVariant;
  className?: string;
}) {
  const cfg: Record<CardValueVariant, string> = {
    default: "text-neutral-50",
    positive: "text-rate-positive",
    negative: "text-rate-negative",
  };

  return (
    <div className={cn("text-preset-2-regular w-fit", cfg[variant], className)}>
      {value}
    </div>
  );
}

export { RateHistoryCard, RateHistoryCardTitle, RateHistoryCardValue };
