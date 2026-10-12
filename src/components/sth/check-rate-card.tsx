import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const CheckRateCard = ({ className, children, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			className={cn('flex flex-col w-full gap-5 border bg-neutral-600 border-border rounded-xl p-4 md:p-5', className)}
			{...props}
		>
			{children}
		</div>
	);
};

const CheckRateCardTitle = ({ className, children, ...props }: ComponentProps<'h2'>) => {
	return (
		<h2 className={cn('uppercase text-preset-4 text-card-foreground', className)} {...props}>
			{children}
		</h2>
	);
};

const CheckRateCardContent = ({ className, children, ...props }: ComponentProps<'div'>) => {
	return (
		<div className={cn('flex items-center gap-9 justify-between', className)} {...props}>
			{children}
		</div>
	);
};

const CheckRateInputAmount = ({ className, ...props }: ComponentProps<'input'>) => {
	return (
		<input
			className={cn(
				'text-preset-1 outline-none no-spinner max-w-32 w-full focus:ring-ring focus:ring-2 transition-colors rounded-[0.5rem]',
				className,
			)}
			{...props}
		/>
	);
};

export { CheckRateCard, CheckRateCardTitle, CheckRateCardContent, CheckRateInputAmount };
