"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useLiveMarket } from "@/hooks/use-live-market";

import {
  LiveMarketCard,
  LiveMarketCardChange,
  LiveMarketCardLabel,
  LiveMarketCardValue,
} from "./live-market-card";

export function LiveMarketSlider() {
  const { data: liveMarkets } = useLiveMarket();

  return (
    <div className="flex w-full">
      <div className="bg-primary text-primary-foreground inline-flex h-8.5 shrink-0 items-center gap-2 px-4 md:h-10">
        <span className="bg-background size-1.5 rounded-full" />
        <p className="text-preset-5-medium uppercase">live markets</p>
      </div>

      <InfiniteSlider
        className="bg-neutral-500"
        reverse
        speedOnHover={20}
        gap={0}
      >
        {liveMarkets.map((rate) => (
          <LiveMarketCard className="w-full" key={rate.pair}>
            <LiveMarketCardLabel>{rate.pair}</LiveMarketCardLabel>
            <LiveMarketCardValue>{rate.value}</LiveMarketCardValue>
            <LiveMarketCardChange value={rate.change} />
          </LiveMarketCard>
        ))}
      </InfiniteSlider>
    </div>
  );
}
