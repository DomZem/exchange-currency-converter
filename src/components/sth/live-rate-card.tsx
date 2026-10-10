import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const LiveRateCard = ({ className, children, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-2.5 h-8.5 md:text-preset-5-regular md:h-10 px-3 bg-live-rate-card text-preset-6 text-live-rate-card-foreground',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

const LiveRateCardLabel = ({ className, children, ...props }: ComponentProps<'p'>) => {
	return (
		<p className={cn('', className)} {...props}>
			{children}
		</p>
	);
};

const LiveRateCardValue = ({ className, children, ...props }: ComponentProps<'span'>) => {
	return (
		<span className={cn('text-white md:text-preset-5-medium', className)} {...props}>
			{children}
		</span>
	);
};

const LiveRateCardChange = ({ value, className }: { value: number; className?: string }) => {
	const isPositive = value > 0;

	return (
		<div
			className={cn(
				'inline-flex items-center gap-1',
				isPositive ? 'text-rate-positive' : 'text-rate-negative',
				className,
			)}
		>
			{isPositive ? <TrendingUp className='size-3.5' /> : <TrendingDown className='size-3.5' />}

			<span>
				{isPositive ? '+' : null}
				{value.toFixed(2)}%
			</span>
		</div>
	);
};

export { LiveRateCard, LiveRateCardLabel, LiveRateCardValue, LiveRateCardChange };
