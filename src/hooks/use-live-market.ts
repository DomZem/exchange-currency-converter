import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import {
  todayRatesQueryOptions,
  yesterdayRatesQueryOptions,
} from "@/queries/rate-query";

export function useLiveMarket() {
  const { data: todayRates, isPending: isTodayRatesPending } = useSuspenseQuery(
    todayRatesQueryOptions,
  );

  const { data: yesterdayRates, isPending: isYesterdayRatesPending } = useQuery(
    yesterdayRatesQueryOptions,
  );

  const data: {
    pair: string;
    value: number;
    change: number;
  }[] = [];

  if (todayRates && yesterdayRates) {
    todayRates.forEach((todayRate) => {
      const yesterdayRate = yesterdayRates.find(
        (y) => y.base === todayRate.base && y.quote === todayRate.quote,
      );

      const currentValue = Number(todayRate.rate);
      const previousValue = yesterdayRate ? Number(yesterdayRate.rate) : null;

      let change = 0;

      if (previousValue && !isNaN(currentValue) && !isNaN(previousValue)) {
        change = ((currentValue - previousValue) / previousValue) * 100;
      }

      data.push({
        pair: `${todayRate.base}/${todayRate.quote}`,
        value: currentValue || 0,
        change: parseFloat(change.toFixed(2)),
      });
    });
  }

  return {
    data,
    isPending: isTodayRatesPending || isYesterdayRatesPending,
  };
}
