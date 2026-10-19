import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function ConversionLogCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
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
}

function ConversionLogCardHeader({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-1 md:flex-row md:gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function ConversionLogCardTimestamp({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-preset-4 w-16 text-neutral-200", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function ConversionLogCardCurrencyPair({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-preset-4 inline-flex items-center gap-2 text-neutral-50 uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ConversionLogCardFooter({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("inline-flex items-center gap-2.5 md:gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function ConversionLogCardAmounts({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-end gap-0.5 md:flex-row md:items-center md:gap-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ConversionLogCardSendAmount({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-preset-3-regular text-neutral-100", className)}
      {...props}
    >
      {children}
    </p>
  );
}

function ConversionLogCardReceiveAmount({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-primary text-preset-3-regular", className)}
      {...props}
    >
      {" "}
      {children}
    </p>
  );
}

export {
  ConversionLogCard,
  ConversionLogCardAmounts,
  ConversionLogCardCurrencyPair,
  ConversionLogCardFooter,
  ConversionLogCardHeader,
  ConversionLogCardReceiveAmount,
  ConversionLogCardSendAmount,
  ConversionLogCardTimestamp,
};
