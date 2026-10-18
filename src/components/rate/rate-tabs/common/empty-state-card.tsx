import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function EmptyStateCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-10 text-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function EmptyStateCardTitle({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("text-preset-2 text-neutral-100", className)} {...props}>
      {children}
    </p>
  );
}

function EmptyStateCardSubtitle({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("text-preset-4 text-neutral-200", className)} {...props}>
      {children}
    </p>
  );
}

export { EmptyStateCard, EmptyStateCardSubtitle,EmptyStateCardTitle };
