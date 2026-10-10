'use client';

import { useLiveMarket } from '@/hooks/use-live-market';
import { InfiniteSlider } from '../ui/infinite-slider';
import { LiveRateCard, LiveRateCardChange, LiveRateCardLabel, LiveRateCardValue } from './live-rate-card';

export function LiveMarketsSlider() {
	const { data: liveMarkets, isPending } = useLiveMarket();

	if (isPending || !liveMarkets || liveMarkets.length === 0) {
		return null;
	}

	return (
		<div className='w-full flex'>
			<div className='inline-flex items-center shrink-0 gap-2 h-8.5 md:h-10 px-4 bg-primary text-primary-foreground'>
				<span className='size-1.5 rounded-full bg-background' />
				<p className='uppercase text-preset-5-medium'>live markets</p>
			</div>

			<InfiniteSlider className='bg-neutral-500' speedOnHover={20} gap={0}>
				{liveMarkets.map((rate) => (
					<LiveRateCard className='w-full' key={rate.pair}>
						<LiveRateCardLabel>{rate.pair}</LiveRateCardLabel>
						<LiveRateCardValue>{rate.value}</LiveRateCardValue>
						<LiveRateCardChange value={rate.change} />
					</LiveRateCard>
				))}
			</InfiniteSlider>
		</div>
	);
}
