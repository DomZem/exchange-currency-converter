import { queryOptions, useQuery } from "@tanstack/react-query";

import { CurrencyRateFactory } from "@/api/currency-rate/factories/currency-rate.factory";

export function useLatestRatesByBase(base: string) {
  return useQuery(
    queryOptions({
      queryKey: ["latest-rates", base],
      queryFn: async () => {
        const factory = new CurrencyRateFactory();
        const service = factory.createService();
        return await service.getLatestRatesByBase(base);
      },
    }),
  );
}
