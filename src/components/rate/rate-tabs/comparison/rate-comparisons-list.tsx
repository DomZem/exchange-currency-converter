import { Star } from "lucide-react";
import Image from "next/image";

import type { CurrencyRate } from "@/api/currency-rate/types/currency-rate";
import { Button } from "@/components/ui/button";
import { CURRENCIES } from "@/constants/currencies";

import {
  RateComparisonCard,
  RateComparisonCardActions,
  RateComparisonCardContent,
  RateComparisonCardHeader,
  RateComparisonCardSth,
  RateComparisonCardSubtitle,
  RateComparisonCardTitle,
  RateComparisonCardValue,
} from "./rate-comparison-card";

export function RateComparisonsList({
  currencyRates,
  sendCurrency,
}: {
  currencyRates: CurrencyRate[];
  sendCurrency: {
    currency: string;
    sendAmount: string;
  };
}) {
  return (
    <ul className="grid gap-3">
      {currencyRates.map((currencyRate) => {
        const currency = CURRENCIES[currencyRate.quote];
        const convertedAmount =
          Number(sendCurrency.sendAmount ?? 0) * currencyRate.rate;

        return (
          <li key={currencyRate.quote}>
            <RateComparisonCard>
              <RateComparisonCardContent>
                <Image
                  src={currency.iconSrc}
                  width={24}
                  height={24}
                  alt={currencyRate.quote}
                />

                <RateComparisonCardHeader>
                  <RateComparisonCardTitle>
                    {currencyRate.quote}
                  </RateComparisonCardTitle>
                  <RateComparisonCardSubtitle>
                    {currency.name}
                  </RateComparisonCardSubtitle>
                </RateComparisonCardHeader>
              </RateComparisonCardContent>

              <RateComparisonCardActions>
                <div className="inline-flex flex-col items-end gap-2.5">
                  <RateComparisonCardValue>
                    {convertedAmount.toFixed(2)}
                  </RateComparisonCardValue>
                  <RateComparisonCardSth>
                    @ {currencyRate.rate}
                  </RateComparisonCardSth>
                </div>

                <Button variant="outline" size="icon-sm">
                  <Star />
                </Button>
              </RateComparisonCardActions>
            </RateComparisonCard>
          </li>
        );
      })}
    </ul>
  );
}
