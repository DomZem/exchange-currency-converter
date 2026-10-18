import { useAtom } from "jotai";
import { ArrowLeftRight } from "lucide-react";

import type { CurrencyRate } from "@/api/currency-rate/types/currency-rate";
import { Button } from "@/components/ui/button";
import { receiveCurrencyAtom } from "@/stores/receive-currency-atom";
import { sendCurrencyAtom } from "@/stores/send-currency-atom";

import {
  CheckRateCard,
  CheckRateCardContent,
  CheckRateCardTitle,
  CheckRateInputAmount,
} from "./check-rate-card";
import { CurrencyPicker } from "./currency-picker";

export function CheckRateContent({
  currencyRate,
}: {
  currencyRate: CurrencyRate | null;
}) {
  const [sendCurrency, setSendCurrency] = useAtom(sendCurrencyAtom);
  const [receiveCurrency, setReceiveCurrency] = useAtom(receiveCurrencyAtom);

  function handleSwap() {}

  function handleSendAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = event.target.value;
    setSendCurrency((prev) => ({ ...prev, sendAmount: rawValue }));

    if (rawValue === "" || isNaN(Number(rawValue))) {
      setReceiveCurrency((prev) => ({ ...prev, receiveAmount: "" }));
      return;
    }

    if (currencyRate) {
      setReceiveCurrency((prev) => ({
        ...prev,
        receiveAmount: (Number(rawValue) * currencyRate.rate).toFixed(2),
      }));
    }
  }

  function handleReceiveAmountChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const rawValue = event.target.value;
    setReceiveCurrency((prev) => ({ ...prev, receiveAmount: rawValue }));

    if (rawValue === "" || isNaN(Number(rawValue))) {
      setSendCurrency((prev) => ({ ...prev, sendAmount: "" }));
      return;
    }

    if (currencyRate) {
      setSendCurrency((prev) => ({
        ...prev,
        sendAmount: (Number(rawValue) / currencyRate.rate).toFixed(2),
      }));
    }
  }

  return (
    <div className="border-border flex flex-col items-center gap-4 rounded-t-xl border border-b-0 bg-neutral-700 p-4 md:flex-row md:justify-between md:gap-6 md:p-5">
      <CheckRateCard>
        <CheckRateCardTitle>send</CheckRateCardTitle>

        <CheckRateCardContent>
          <CheckRateInputAmount
            value={sendCurrency.sendAmount}
            onChange={handleSendAmountChange}
            type="number"
            placeholder="0"
          />

          <CurrencyPicker
            selectedCurrency={sendCurrency.currency}
            onCurrencyChange={(currency) =>
              setSendCurrency((prev) => ({ ...prev, currency }))
            }
          />
        </CheckRateCardContent>
      </CheckRateCard>

      <Button variant="secondary" size="icon" onClick={handleSwap}>
        <ArrowLeftRight className="size-5 rotate-90 md:rotate-0" />
      </Button>

      <CheckRateCard>
        <CheckRateCardTitle>receive</CheckRateCardTitle>

        <CheckRateCardContent>
          <CheckRateInputAmount
            className="text-primary"
            value={receiveCurrency.receiveAmount}
            onChange={handleReceiveAmountChange}
            type="number"
            placeholder="0"
          />

          <CurrencyPicker
            selectedCurrency={receiveCurrency.currency}
            onCurrencyChange={(currency) =>
              setReceiveCurrency((prev) => ({ ...prev, currency }))
            }
          />
        </CheckRateCardContent>
      </CheckRateCard>
    </div>
  );
}
