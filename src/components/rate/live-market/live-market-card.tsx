import { TrendingDown, TrendingUp } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const LiveMarketCard = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "md:text-preset-5-regular bg-live-rate-card text-preset-6 text-live-rate-card-foreground inline-flex h-8.5 items-center gap-2.5 px-3 md:h-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const LiveMarketCardLabel = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p className={cn("", className)} {...props}>
      {children}
    </p>
  );
};

const LiveMarketCardValue = ({
  className,
  children,
  ...props
}: ComponentProps<"span">) => {
  return (
    <span
      className={cn("md:text-preset-5-medium text-white", className)}
      {...props}
    >
      {children}
    </span>
  );
};

const LiveMarketCardChange = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const isPositive = value > 0;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1",
        isPositive ? "text-rate-positive" : "text-rate-negative",
        className,
      )}
    >
      {isPositive ? (
        <TrendingUp className="size-3.5" />
      ) : (
        <TrendingDown className="size-3.5" />
      )}

      <span>
        {isPositive ? "+" : null}
        {value.toFixed(2)}%
      </span>
    </div>
  );
};

export {
  LiveMarketCard,
  LiveMarketCardChange,
  LiveMarketCardLabel,
  LiveMarketCardValue,
};
