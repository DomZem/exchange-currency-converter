import type { CurrencyRate } from "../types/currency-rate";

export interface ICurrencyRateService {
  getCurrencyRate(args: { base: string; quote: string }): Promise<CurrencyRate>;

  getHistoricalRates(args: {
    dateFrom: string;
    dateTo: string;
  }): Promise<CurrencyRate[]>;

  getLatestRatesByBase(base: string): Promise<CurrencyRate[]>;

  getHistoricalRatePair(args: {
    base: string;
    quote: string;
    from: string;
    to: string;
  }): Promise<CurrencyRate[]>;
}
