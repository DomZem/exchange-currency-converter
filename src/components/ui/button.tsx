import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import { cn } from '@/lib/utils';

// TODO: focus style
const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center text-preset-5-medium rounded-[0.5rem] cursor-pointer bg-clip-padding uppercase whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:opacity-80',
				outline:
					'border border-primary text-neutral-50 bg-transparent hover:bg-lime-800 active:bg-primary active:text-primary-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-neutral-400 border border-neutral-500 hover:border-neutral-400',
				ghost: 'text-preset-4 text-neutral-50 bg-neutral-500 hover:bg-neutral-400 border border-neutral-400',
			},
			size: {
				default: 'h-8 gap-2 px-3',
				lg: 'h-10 gap-2 px-2.5',
				icon: 'size-12',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function Button({
	className,
	variant = 'default',
	size = 'default',
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot.Root : 'button';

	return (
		<Comp
			data-slot='button'
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
