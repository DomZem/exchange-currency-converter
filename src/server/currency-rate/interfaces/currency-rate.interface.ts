import { CurrencyRate } from "../types/currency-rate";

export interface ICurrencyRateService {
  getCurrentRate(args: { base: string; quote: string }): Promise<CurrencyRate>;

  getHistoricalRates(args: {
    dateFrom: string;
    dateTo: string;
  }): Promise<CurrencyRate[]>;

  getLatestRatesByBase(base: string): Promise<CurrencyRate[]>;
}
