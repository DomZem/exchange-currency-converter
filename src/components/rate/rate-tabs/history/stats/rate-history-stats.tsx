import type { RateHistoryStats as Stats } from "@/types/rate-history";

import {
  RateHistoryCard,
  RateHistoryCardTitle,
  RateHistoryCardValue,
} from "../rate-history-card";
import { RateHistoryStatsContainer } from "./rate-history-stats-container";

type RateHistoryStatsProps = {
  stats: Stats;
};

export function RateHistoryStats({ stats }: RateHistoryStatsProps) {
  return (
    <RateHistoryStatsContainer>
      <RateHistoryCard>
        <RateHistoryCardTitle>open</RateHistoryCardTitle>
        <RateHistoryCardValue value={stats.open.toFixed(4)} />
      </RateHistoryCard>

      <RateHistoryCard>
        <RateHistoryCardTitle>last</RateHistoryCardTitle>
        <RateHistoryCardValue value={stats.last.toFixed(4)} />
      </RateHistoryCard>

      <RateHistoryCard>
        <RateHistoryCardTitle>change</RateHistoryCardTitle>
        <RateHistoryCardValue
          value={
            stats.change >= 0
              ? `+${stats.change.toFixed(4)}`
              : stats.change.toFixed(4)
          }
          variant={stats.change >= 0 ? "positive" : "negative"}
        />
      </RateHistoryCard>

      <RateHistoryCard>
        <RateHistoryCardTitle>% change</RateHistoryCardTitle>
        <RateHistoryCardValue
          value={
            stats.percent >= 0
              ? `+${stats.percent.toFixed(2)}%`
              : `${stats.percent.toFixed(2)}%`
          }
          variant={stats.percent >= 0 ? "positive" : "negative"}
        />
      </RateHistoryCard>
    </RateHistoryStatsContainer>
  );
}
