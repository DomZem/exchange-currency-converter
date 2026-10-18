import { Skeleton } from "@/components/ui/skeleton";

import { RateHistoryCard, RateHistoryCardTitle } from "../rate-history-card";
import { RateHistoryStatsContainer } from "./rate-history-stats-container";

export function RateHistoryStatsSkeleton() {
  return (
    <RateHistoryStatsContainer>
      <RateHistoryCard>
        <RateHistoryCardTitle>open</RateHistoryCardTitle>
        <Skeleton className="h-6 w-17.25" />
      </RateHistoryCard>

      <RateHistoryCard>
        <RateHistoryCardTitle>last</RateHistoryCardTitle>
        <Skeleton className="h-6 w-17.25" />
      </RateHistoryCard>

      <RateHistoryCard>
        <RateHistoryCardTitle>change</RateHistoryCardTitle>
        <Skeleton className="h-6 w-20" />
      </RateHistoryCard>

      <RateHistoryCard>
        <RateHistoryCardTitle>% change</RateHistoryCardTitle>
        <Skeleton className="h-6 w-17.25" />
      </RateHistoryCard>
    </RateHistoryStatsContainer>
  );
}
