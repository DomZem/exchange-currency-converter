import { queryOptions } from "@tanstack/react-query";
import dayjs from "dayjs";

import { CurrencyRateFactory } from "@/api/currency-rate/factories/currency-rate.factory";

const today = dayjs().format("YYYY-MM-DD");
const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");

export const todayRatesQueryOptions = queryOptions({
  queryKey: ["rates", "today", today],
  queryFn: async () => {
    const factory = new CurrencyRateFactory();
    const service = factory.createService();

    return await service.getHistoricalRates({ dateFrom: today, dateTo: today });
  },
});

export const yesterdayRatesQueryOptions = queryOptions({
  queryKey: ["rates", "yesterday", yesterday],
  queryFn: async () => {
    const factory = new CurrencyRateFactory();
    const service = factory.createService();

    return await service.getHistoricalRates({
      dateFrom: yesterday,
      dateTo: yesterday,
    });
  },
});
