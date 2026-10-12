'use client';

import { ArrowLeftRight, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useCurrentRate } from '@/hooks/use-current-rate';
import { CurrencyPicker } from './currency-picker';
import { CheckRateCard, CheckRateCardContent, CheckRateInputAmount, CheckRateCardTitle } from './check-rate-card';

export function CheckRate() {
	const [sendAmount, setSendAmount] = useState<string>('');
	const [receiveAmount, setReceiveAmount] = useState<string>('');

	const [selectedCurrency, setSelectedCurrency] = useState({ base: 'USD', quote: 'EUR' });

	const { data: currentRate } = useCurrentRate({
		base: selectedCurrency.base,
		quote: selectedCurrency.quote,
	});

	function handleSwap() {
		setSelectedCurrency((prev) => ({
			base: prev.quote,
			quote: prev.base,
		}));
	}

	function handleSendAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
		const rawValue = event.target.value;
		setSendAmount(rawValue);

		if (rawValue === '' || isNaN(Number(rawValue))) {
			setReceiveAmount('');
			return;
		}

		if (currentRate) {
			setReceiveAmount((Number(rawValue) * currentRate.rate).toFixed(2));
		}
	}

	function handleReceiveAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
		const rawValue = event.target.value;
		setReceiveAmount(rawValue);

		if (rawValue === '' || isNaN(Number(rawValue))) {
			setSendAmount('');
			return;
		}

		if (currentRate) {
			setSendAmount((Number(rawValue) / currentRate.rate).toFixed(2));
		}
	}

	return (
		<div className='space-y-4'>
			<h1 className='uppercase text-preset-2-regular'>check the rate</h1>

			<div>
				<div className='border border-b-0 rounded-t-xl md:gap-6 md:flex-row md:justify-between flex md:p-5 p-4 flex-col items-center gap-4 border-border bg-neutral-700'>
					<CheckRateCard>
						<CheckRateCardTitle>send</CheckRateCardTitle>

						<CheckRateCardContent>
							<CheckRateInputAmount
								value={sendAmount}
								onChange={handleSendAmountChange}
								type='number'
								placeholder='0'
							/>

							<CurrencyPicker
								selectedCurrency={selectedCurrency.base}
								onCurrencyChange={(currency) => setSelectedCurrency((prev) => ({ ...prev, base: currency }))}
							/>
						</CheckRateCardContent>
					</CheckRateCard>

					<Button variant='secondary' size='icon' onClick={handleSwap}>
						<ArrowLeftRight className='size-5 rotate-90 md:rotate-0' />
					</Button>

					<CheckRateCard>
						<CheckRateCardTitle>receive</CheckRateCardTitle>

						<CheckRateCardContent>
							<CheckRateInputAmount
								className='text-primary'
								value={receiveAmount}
								onChange={handleReceiveAmountChange}
								type='number'
								placeholder='0'
							/>

							<CurrencyPicker
								selectedCurrency={selectedCurrency.quote}
								onCurrencyChange={(currency) => setSelectedCurrency((prev) => ({ ...prev, quote: currency }))}
							/>
						</CheckRateCardContent>
					</CheckRateCard>
				</div>

				<div className='border border-dashed' />

				<div className='border border-t-0 rounded-b-xl border-border p-4 md:flex-row md:justify-between flex flex-col md:px-5 gap-4 items-center bg-neutral-700'>
					<span className='uppercase text-preset-6 md:text-preset-5-regular'>
						{currentRate
							? `1 ${selectedCurrency.base} = ${currentRate.rate.toFixed(4)} ${selectedCurrency.quote}`
							: 'Loading...'}
					</span>

					<div className='inline-flex items-center gap-2 md:gap-3'>
						<Button>
							<Star className='fill-primary-foreground' />
							favorited
						</Button>

						<Button variant='outline'>log conversion</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
