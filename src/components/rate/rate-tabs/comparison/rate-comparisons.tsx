import { useAtomValue } from "jotai";

import { CURRENCIES } from "@/constants/currencies";
import { useLatestRatesByBase } from "@/hooks/use-latest-rates-by-base";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

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
import { RateComparisonsList } from "./rate-comparisons-list";

export function RateComparisons() {
  const sendCurrency = useAtomValue(sendCurrencyAtom);
  const { data: latestRates } = useLatestRatesByBase(sendCurrency.currency);

  const filteredRates =
    latestRates?.filter((rate) => {
      const isSelf = rate.quote === sendCurrency.currency;
      const isSupported = rate.quote in CURRENCIES;

      return isSupported && !isSelf;
    }) ?? [];

  if (Number(sendCurrency.sendAmount) === 0) {
    return (
      <EmptyStateCard>
        <EmptyStateCardTitle>No comparison available</EmptyStateCardTitle>
        <EmptyStateCardSubtitle>
          Enter an amount in SEND above to see what your money is worth in other
          currencies.
        </EmptyStateCardSubtitle>
      </EmptyStateCard>
    );
  }

  return (
    <RateSectionCard>
      <RateSectionCardHeader>
        <div className="inline-flex items-baseline gap-3">
          <p className="text-preset-4 text-neutral-200 uppercase">
            multi currency
          </p>
          <RateSectionCardTitle>
            {sendCurrency.sendAmount} from {sendCurrency.currency}
          </RateSectionCardTitle>
        </div>

        <RateSectionCardSubtitle>
          {filteredRates.length} pairs
        </RateSectionCardSubtitle>
      </RateSectionCardHeader>

      <RateComparisonsList
        sendCurrency={sendCurrency}
        currencyRates={filteredRates}
      />
    </RateSectionCard>
  );
}
