import type { ICurrencyRateService } from "../interfaces/currency-rate.interface";
import type { CurrencyRate } from "../types/currency-rate";

export class FrankfurterRateService implements ICurrencyRateService {
  private readonly API_URL = "https://api.frankfurter.dev/v2";

  public async getCurrencyRate({
    base,
    quote,
  }: {
    base: string;
    quote: string;
  }): Promise<CurrencyRate> {
    const res = await fetch(`${this.API_URL}/rate/${base}/${quote}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch currency rate: ${res.statusText}`);
    }

    return res.json();
  }

  public async getHistoricalRates({
    dateFrom,
    dateTo,
  }: {
    dateFrom: string;
    dateTo: string;
  }): Promise<CurrencyRate[]> {
    const res = await fetch(
      `${this.API_URL}/rates?from=${dateFrom}&to=${dateTo}`,
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch historical currency rates: ${res.statusText}`,
      );
    }

    return res.json();
  }

  public async getLatestRatesByBase(base: string): Promise<CurrencyRate[]> {
    const res = await fetch(`${this.API_URL}/rates?base=${base}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch something: ${res.statusText}`);
    }

    return res.json();
  }

  public async getHistoricalRatePair({
    base,
    quote,
    from,
    to,
  }: {
    base: string;
    quote: string;
    from: string;
    to: string;
  }): Promise<CurrencyRate[]> {
    const params = new URLSearchParams({
      base,
      quotes: quote,
      from,
      to,
    });

    const res = await fetch(`${this.API_URL}/rates?${params.toString()}`);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch historical currency rates: ${res.statusText}`,
      );
    }

    return res.json();
  }
}
