import { dehydrate, HydrationBoundary, noop } from "@tanstack/react-query";

import { CheckRate } from "@/components/rate/check-rate/check-rate";
import { LiveMarketSlider } from "@/components/rate/live-market/live-market-slider";
import { Logo } from "@/components/ui/logo";
import { CURRENCIES } from "@/constants/currencies";
import { getQueryClient } from "@/lib/query-client";
import {
  todayRatesQueryOptions,
  yesterdayRatesQueryOptions,
} from "@/queries/rate-query";

export default function HomePage() {
  const queryClient = getQueryClient();

  void Promise.all([
    queryClient.query(todayRatesQueryOptions),
    queryClient.query(yesterdayRatesQueryOptions),
  ]).catch(noop);

  return (
    <div>
      <header className="flex h-13 items-center justify-between px-4 md:h-16.5 md:px-6">
        <Logo />

        <div className="text-preset-6 md:text-preset-4 inline-flex items-center gap-2 text-neutral-200 uppercase">
          <p>{Object.keys(CURRENCIES).length} currencies</p>
          <span>&middot;</span>
          <p>eod</p>
          <span>&middot;</span>
          <p>ecb data</p>
        </div>
      </header>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <LiveMarketSlider />
      </HydrationBoundary>

      <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-8 lg:space-y-8">
        <CheckRate />
      </main>
    </div>
  );
}
