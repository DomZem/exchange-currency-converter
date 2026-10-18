import { useAtomValue } from "jotai";

import { CURRENCIES } from "@/constants/currencies";
import { useLatestRatesByBase } from "@/hooks/use-latest-rates-by-base";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

import {
  EmptyStateCard,
  EmptyStateCardSubtitle,
  EmptyStateCardTitle,
} from "../common/empty-state-card";
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
    <div className="space-y-4 rounded-[1rem] border border-neutral-600 bg-neutral-700 p-4 md:space-y-5 md:p-5">
      <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between">
        <div className="inline-flex items-baseline gap-3 uppercase">
          <p className="text-preset-4 text-neutral-200">multi currency</p>
          <p className="text-preset-3-medium text-white">
            {sendCurrency.sendAmount} from {sendCurrency.currency}
          </p>
        </div>

        <p className="text-preset-5-regular text-neutral-50 uppercase">
          {filteredRates.length} pairs
        </p>
      </div>

      <RateComparisonsList
        sendCurrency={sendCurrency}
        currencyRates={filteredRates}
      />
    </div>
  );
}
