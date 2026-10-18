import { useAtomValue } from "jotai";
import { useMemo, useState } from "react";

import { useRateHistory } from "@/hooks/use-rate-history";
import { getHistoryDateRange, type RateHistoryRange } from "@/lib/rate-history";
import { receiveCurrencyAtom } from "@/stores/receive-currency-atom";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

import {
  EmptyStateCard,
  EmptyStateCardSubtitle,
  EmptyStateCardTitle,
} from "../common/empty-state-card";
import { RateHistoryChart } from "./rate-history-chart";
import { RateHistoryDateRange } from "./rate-history-date-range";
import { RateHistoryStats } from "./stats/rate-history-stats";
import { RateHistoryStatsSkeleton } from "./stats/rate-history-stats-skeleton";

export function RateHistory() {
  const [selectedDate, setSelectedDate] = useState<RateHistoryRange>("1M");

  const sendCurrency = useAtomValue(sendCurrencyAtom);
  const receiveCurrency = useAtomValue(receiveCurrencyAtom);

  const { from, to } = useMemo(
    () => getHistoryDateRange(selectedDate),
    [selectedDate],
  );

  const { data: historyRates } = useRateHistory({
    base: sendCurrency.currency,
    quote: receiveCurrency.currency,
    from,
    to,
  });

  const stats = useMemo(() => {
    if (!historyRates || historyRates.length === 0) return null;

    const rates = historyRates.map((item) => Number(item.rate));

    const min = Math.min(...rates);
    const max = Math.max(...rates);
    const mid = (min + max) / 2;

    const first = rates[0];
    const latest = rates[rates.length - 1];
    const diff = latest - first;
    const percent = (diff / first) * 100;

    return {
      open: first,
      last: latest,
      change: diff,
      percent,
      ticks: [...new Set([min, mid, max])],
    };
  }, [historyRates]);

  if (historyRates && historyRates.length === 0) {
    return (
      <EmptyStateCard>
        <EmptyStateCardTitle>No chart data available</EmptyStateCardTitle>
        <EmptyStateCardSubtitle>
          We couldn&apos;t load rate history for {sendCurrency.currency}/
          {receiveCurrency.currency} right now. This usually clears up in a
          minute.
        </EmptyStateCardSubtitle>
      </EmptyStateCard>
    );
  }

  return (
    <div className="space-y-4 md:space-y-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {stats ? (
          <RateHistoryStats stats={stats} />
        ) : (
          <RateHistoryStatsSkeleton />
        )}

        <RateHistoryDateRange onChange={setSelectedDate} />
      </div>

      <RateHistoryChart
        sendCurrency={sendCurrency.currency}
        receiveCurrency={receiveCurrency.currency}
        historyRates={historyRates ?? []}
        stats={stats}
      />
    </div>
  );
}
