import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const RateHistoryStatsContainer = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "grid max-w-152 flex-1 grid-cols-2 grid-rows-2 gap-2.5 md:grid-cols-4 md:grid-rows-none md:gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { RateHistoryStatsContainer };
