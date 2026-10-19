import { Button } from "@/components/ui/button";
import { useConversions } from "@/hooks/use-conversions";

import {
  EmptyStateCard,
  EmptyStateCardSubtitle,
  EmptyStateCardTitle,
} from "../common/empty-state-card";
import {
  RateSectionCard,
  RateSectionCardHeader,
  RateSectionCardSubtitle,
  RateSectionCardTitle,
} from "../common/rate-section-card";
import { ConversionLogsList } from "./conversion-logs-list";

export function ConversionLogs() {
  const { conversions, clearConversions } = useConversions();

  if (conversions.length === 0) {
    return (
      <EmptyStateCard>
        <EmptyStateCardTitle>No conversions logged yet</EmptyStateCardTitle>
        <EmptyStateCardSubtitle>
          Every conversion is recorded here automatically when you tap LOG
          CONVERSION. Your log is private to this session and this browser.
        </EmptyStateCardSubtitle>
      </EmptyStateCard>
    );
  }

  return (
    <RateSectionCard>
      <RateSectionCardHeader>
        <RateSectionCardTitle>conversion log</RateSectionCardTitle>

        <div className="flex items-center justify-between gap-4">
          <RateSectionCardSubtitle>
            {conversions.length} logged
          </RateSectionCardSubtitle>
          <Button onClick={clearConversions}>clear all</Button>
        </div>
      </RateSectionCardHeader>

      <ConversionLogsList />
    </RateSectionCard>
  );
}
