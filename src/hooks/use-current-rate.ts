import { CurrencyRateFactory } from '@/server/currency-rate/factories/currency-rate.factory';
import { queryOptions, useQuery } from '@tanstack/react-query';

export function useCurrentRate({ base, quote }: { base: string; quote: string }) {
	return useQuery(
		queryOptions({
			queryKey: ['current-rate', base, quote],
			queryFn: async () => {
				const factory = new CurrencyRateFactory();
				const service = factory.createService();
				return await service.getCurrentRate({ base, quote });
			},
		}),
	);
}
