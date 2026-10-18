import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const CheckRateCard = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "border-border flex w-full flex-col gap-5 rounded-xl border bg-neutral-600 p-4 md:p-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CheckRateCardTitle = ({
  className,
  children,
  ...props
}: ComponentProps<"h2">) => {
  return (
    <h2
      className={cn("text-preset-4 text-card-foreground uppercase", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

const CheckRateCardContent = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex items-center justify-between gap-9", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const CheckRateInputAmount = ({
  className,
  ...props
}: ComponentProps<"input">) => {
  return (
    <input
      className={cn(
        "text-preset-1 no-spinner focus:ring-ring w-full max-w-32 rounded-[0.5rem] transition-colors outline-none focus:ring-2",
        className,
      )}
      {...props}
    />
  );
};

export {
  CheckRateCard,
  CheckRateCardContent,
  CheckRateCardTitle,
  CheckRateInputAmount,
};
