export interface ICurrencyRate {
	getCurrentRate(args: { base: string; quote: string }): Promise<{
		date: Date;
		base: string;
		quote: string;
		rate: number;
	}>;

	getHistoricalRates(args: { dateFrom: string; dateTo: string }): Promise<
		{
			date: Date;
			base: string;
			quote: string;
			rate: number;
		}[]
	>;
}
