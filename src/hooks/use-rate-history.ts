import { queryOptions, useQuery } from "@tanstack/react-query";

import { CurrencyRateFactory } from "@/api/currency-rate/factories/currency-rate.factory";

export function useRateHistory({
  base,
  quote,
  from,
  to,
}: {
  base: string;
  quote: string;
  from: string;
  to: string;
}) {
  return useQuery(
    queryOptions({
      queryKey: ["rate-history", base, quote, from, to],
      queryFn: async () => {
        const factory = new CurrencyRateFactory();
        const service = factory.createService();

        return await service.getHistoricalRatePair({
          base,
          quote,
          from,
          to,
        });
      },
    }),
  );
}
