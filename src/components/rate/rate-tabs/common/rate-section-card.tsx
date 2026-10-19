import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function RateSectionCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "space-y-4 rounded-[1rem] border border-neutral-600 bg-neutral-700 p-4 md:space-y-5 md:p-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function RateSectionCardHeader({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function RateSectionCardTitle({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-preset-3-medium text-neutral-50 uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function RateSectionCardSubtitle({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-preset-5-regular text-neutral-50/70 uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export {
  RateSectionCard,
  RateSectionCardHeader,
  RateSectionCardSubtitle,
  RateSectionCardTitle,
};
