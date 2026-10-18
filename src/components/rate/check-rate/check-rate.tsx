"use client";

import { useAtomValue } from "jotai";

import { useCurrencyRate } from "@/hooks/use-currency-rate";
import { receiveCurrencyAtom } from "@/stores/receive-currency-atom";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

import { CheckRateContent } from "./check-rate-content";
import { CheckRateFooter } from "./check-rate-footer";

export function CheckRate() {
  const sendCurrency = useAtomValue(sendCurrencyAtom);
  const receiveCurrency = useAtomValue(receiveCurrencyAtom);

  const { data: currencyRate, isLoading } = useCurrencyRate({
    base: sendCurrency.currency,
    quote: receiveCurrency.currency,
  });

  return (
    <div className="space-y-4">
      <h1 className="text-preset-2-regular uppercase">check the rate</h1>

      <div>
        <CheckRateContent currencyRate={currencyRate ?? null} />
        <div className="border border-dashed" />
        <CheckRateFooter
          currencyRate={currencyRate ?? null}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
