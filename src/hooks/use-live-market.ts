import { CurrencyRateFactory } from '@/server/currency-rate/factories/currency-rate.factory';
import { queryOptions, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

export function useLiveMarket() {
	const today = dayjs().format('YYYY-MM-DD');
	const yesterday = dayjs().subtract(1, 'day').format('YYYY-MM-DD');

	const { data: todayRates, isPending: isTodayRatesPending } = useQuery(
		queryOptions({
			queryKey: ['historical-rate', 'today', today],
			queryFn: async () => {
				const factory = new CurrencyRateFactory();
				const service = factory.createService();

				return await service.getHistoricalRates({ dateFrom: today, dateTo: today });
			},
		}),
	);

	const { data: yesterdayRates, isPending: isYesterdayRatesPending } = useQuery(
		queryOptions({
			queryKey: ['historical-rate', 'yesterday', yesterday],
			queryFn: async () => {
				const factory = new CurrencyRateFactory();
				const service = factory.createService();

				return await service.getHistoricalRates({ dateFrom: yesterday, dateTo: yesterday });
			},
		}),
	);

	const data: {
		pair: string;
		value: number;
		change: number;
	}[] = [];

	if (todayRates && yesterdayRates) {
		todayRates.forEach((todayRate) => {
			const yesterdayRate = yesterdayRates.find((y) => y.base === todayRate.base && y.quote === todayRate.quote);

			const currentValue = Number(todayRate.rate);
			const previousValue = yesterdayRate ? Number(yesterdayRate.rate) : null;

			let change = 0;

			if (previousValue && !isNaN(currentValue) && !isNaN(previousValue)) {
				change = ((currentValue - previousValue) / previousValue) * 100;
			}

			data.push({
				pair: `${todayRate.base}/${todayRate.quote}`,
				value: currentValue || 0,
				change: parseFloat(change.toFixed(2)),
			});
		});
	}

	return {
		data,
		isPending: isTodayRatesPending || isYesterdayRatesPending,
	};
}
