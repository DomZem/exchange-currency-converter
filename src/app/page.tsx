import { CheckRate } from '@/components/sth/check-rate';
import { LiveMarketsSlider } from '@/components/sth/live-markets-slider';
import { Logo } from '@/components/ui/logo';

export default function Home() {
	return (
		<div>
			<header className='h-13 md:h-16.5 px-4 md:px-6 flex items-center justify-between'>
				<Logo />

				<div className='uppercase text-preset-6 md:text-preset-4 gap-2 inline-flex items-center text-neutral-200'>
					<p>55 currencies</p>
					<span>&middot;</span>
					<p>eod</p>
					<span>&middot;</span>
					<p>ecb data</p>
				</div>
			</header>

			<LiveMarketsSlider />

			<main className='max-w-6xl w-full mx-auto px-4 space-y-10 lg:space-y-8 py-8'>
				<CheckRate />
			</main>
		</div>
	);
}
