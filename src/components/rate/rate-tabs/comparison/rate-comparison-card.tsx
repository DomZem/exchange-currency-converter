import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const RateComparisonCard = ({
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

const RateComparisonCardContent = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn("inline-flex items-center gap-2.5 md:gap-5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const RateComparisonCardHeader = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
};

const RateComparisonCardTitle = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p className={cn("text-preset-4 text-white", className)} {...props}>
      {children}
    </p>
  );
};

const RateComparisonCardSubtitle = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p
      className={cn("text-preset-5-regular text-neutral-200", className)}
      {...props}
    >
      {children}
    </p>
  );
};

const RateComparisonCardActions = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn("inline-flex items-center gap-2.5 md:gap-5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const RateComparisonCardValue = ({
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

const RateComparisonCardSth = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p className={cn("text-preset-6 text-neutral-200", className)} {...props}>
      {children}
    </p>
  );
};

export {
  RateComparisonCard,
  RateComparisonCardActions,
  RateComparisonCardContent,
  RateComparisonCardHeader,
  RateComparisonCardSth,
  RateComparisonCardSubtitle,
  RateComparisonCardTitle,
  RateComparisonCardValue,
};
