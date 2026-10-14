import { ICurrencyRateService } from "../interfaces/currency-rate.interface";
import { CurrencyRate } from "../types/currency-rate";

export class FrankfurterRateService implements ICurrencyRateService {
  private readonly API_URL = "https://api.frankfurter.dev/v2";

  public async getCurrentRate({
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
}
