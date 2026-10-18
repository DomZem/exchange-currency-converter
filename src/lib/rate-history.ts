import dayjs, { Dayjs } from "dayjs";

const RATE_HISTORY_RANGE = ["1D", "1W", "1M", "3M", "1Y", "5Y"] as const;

type RateHistoryRange = (typeof RATE_HISTORY_RANGE)[number];

function getHistoryDateRange(range: RateHistoryRange): {
  from: string;
  to: string;
} {
  const DATE_FORMAT = "YYYY-MM-DD";

  const now = dayjs();
  const to = now.format(DATE_FORMAT);

  const fromMap: Record<RateHistoryRange, Dayjs> = {
    "1D": now.subtract(1, "day"),
    "1W": now.subtract(1, "week"),
    "1M": now.subtract(1, "month"),
    "3M": now.subtract(3, "month"),
    "1Y": now.subtract(1, "year"),
    "5Y": now.subtract(5, "year"),
  };

  return {
    from: fromMap[range].format(DATE_FORMAT),
    to,
  };
}

export { getHistoryDateRange,RATE_HISTORY_RANGE };
export type { RateHistoryRange };
