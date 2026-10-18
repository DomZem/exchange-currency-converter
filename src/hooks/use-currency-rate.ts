import { queryOptions, useQuery } from "@tanstack/react-query";

import { CurrencyRateFactory } from "@/api/currency-rate/factories/currency-rate.factory";

export function useCurrencyRate({
  base,
  quote,
}: {
  base: string;
  quote: string;
}) {
  return useQuery(
    queryOptions({
      queryKey: ["currency-rate", base, quote],
      queryFn: async () => {
        const factory = new CurrencyRateFactory();
        const service = factory.createService();

        return await service.getCurrencyRate({ base, quote });
      },
    }),
  );
}
