import dayjs from "dayjs";
import { useAtomValue } from "jotai";

import { useCurrencyRate } from "@/hooks/use-currency-rate";
import { receiveCurrencyAtom } from "@/stores/receive-currency-atom";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

export function RateHistoryCurrent() {
  const sendCurrency = useAtomValue(sendCurrencyAtom);
  const receiveCurrency = useAtomValue(receiveCurrencyAtom);

  const { data: currentRate } = useCurrencyRate({
    base: sendCurrency.currency,
    quote: receiveCurrency.currency,
  });

  if (!currentRate) {
    return null;
  }

  return (
    <div className="text-preset-5-regular text-neutral-50/70 uppercase">
      <span>{currentRate.rate.toFixed(4)}</span>
      <span>&middot;</span>
      <span>{dayjs(currentRate.date).format("MMM DD HH:mm")} CET</span>
    </div>
  );
}
