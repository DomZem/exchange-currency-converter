import { ICurrencyRate } from '../interfaces/currency-rate.interface';

export class FrankfurterRateService implements ICurrencyRate {
	private readonly API_URL = 'https://api.frankfurter.dev/v2';

	public async getCurrentRate({
		base,
		quote,
	}: {
		base: string;
		quote: string;
	}): Promise<{ date: Date; base: string; quote: string; rate: number }> {
		const res = await fetch(`${this.API_URL}/rate/${base}/${quote}`);

		if (!res.ok) {
			throw new Error(`Failed to fetch currency rate: ${res.statusText}`);
		}

		return res.json();
	}

	public async getHistoricalRates({ dateFrom, dateTo }: { dateFrom: string; dateTo: string }): Promise<
		{
			date: Date;
			base: string;
			quote: string;
			rate: number;
		}[]
	> {
		const res = await fetch(`${this.API_URL}/rates?from=${dateFrom}&to=${dateTo}`);

		if (!res.ok) {
			throw new Error(`Failed to fetch historical currency rates: ${res.statusText}`);
		}

		return res.json();
	}
}
