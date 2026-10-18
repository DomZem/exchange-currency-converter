import { Triangle } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const FavouriteCurrencyCard = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-[0.625rem] border border-neutral-500 bg-neutral-600 p-3 md:px-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const FavouriteCurrencyCardHeader = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "text-preset-4 inline-flex items-center gap-2 text-neutral-50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const FavouriteCurrencyCardFooter = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className={cn("inline-flex items-center gap-5", className)} {...props}>
      {children}
    </div>
  );
};

const FavouriteCurrencyCardContent = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn("inline-flex flex-col items-end gap-1.5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const FavouriteCurrencyCardTitle = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p
      className={cn("text-preset-3-regular text-neutral-50", className)}
      {...props}
    >
      {children}
    </p>
  );
};

const FavouriteCurrencyCardPercentage = ({
  className,
  percentage,
}: {
  className?: string;
  percentage: number;
}) => {
  const isPositive = percentage >= 0;

  return (
    <div
      className={cn(
        "text-preset-6 inline-flex items-center gap-1.5",
        isPositive ? "text-rate-positive" : "text-rate-negative",
        className,
      )}
    >
      {isPositive ? (
        <Triangle className="fill-rate-positive" size={8} />
      ) : (
        <Triangle className="fill-rate-negative rotate-180" size={8} />
      )}
      <span>
        {isPositive ? "+" : null}
        {percentage.toFixed(2)}%
      </span>
    </div>
  );
};

export {
  FavouriteCurrencyCard,
  FavouriteCurrencyCardContent,
  FavouriteCurrencyCardFooter,
  FavouriteCurrencyCardHeader,
  FavouriteCurrencyCardPercentage,
  FavouriteCurrencyCardTitle,
};
