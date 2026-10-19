import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function RateList({ className, children, ...props }: ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-3", className)} {...props}>
      {children}
    </ul>
  );
}

export { RateList };
