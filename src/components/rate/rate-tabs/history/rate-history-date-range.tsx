import { AnimatedBackground } from "@/components/ui/animated-background";
import { RATE_HISTORY_RANGE, type RateHistoryRange } from "@/lib/rate-history";

export function RateHistoryDateRange({
  onChange,
}: {
  onChange?: (range: RateHistoryRange) => void;
}) {
  return (
    <div className="w-fit rounded-[0.5rem] bg-neutral-700 p-0.5">
      <AnimatedBackground
        defaultValue="1D"
        className="rounded-[0.5rem] bg-neutral-500 text-neutral-50"
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
        onValueChange={(id) => {
          if (id && onChange) {
            onChange(id as RateHistoryRange);
          }
        }}
      >
        {RATE_HISTORY_RANGE.map((label, index) => {
          return (
            <button
              key={index}
              data-id={label}
              type="button"
              aria-label={`${label} view`}
              className="text-preset-5-regular inline-flex w-11.75 cursor-pointer items-center justify-center py-3 text-center"
            >
              {label}
            </button>
          );
        })}
      </AnimatedBackground>
    </div>
  );
}
